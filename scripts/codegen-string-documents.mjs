import { isEnumType } from "graphql";

export const plugin = (schema) => {
	const runtimeEnums = Object.values(schema.getTypeMap())
		.filter((type) => !type.name.startsWith("__") && isEnumType(type))
		.sort((left, right) => left.name.localeCompare(right.name))
		.map((type) => {
			const values = type
				.getValues()
				.map(
					(value) =>
						`  ${toPascalCase(value.name)}: ${JSON.stringify(value.name)},`,
				)
				.join("\n");

			return `export const ${type.name} = {\n${values}\n} as const;`;
		})
		.join("\n\n");

	return `
export interface GraphQLClientRequestOptions<
  TVariables extends object = Record<string, unknown>,
> {
  document: string;
  variables?: TVariables;
  requestHeaders?: Record<string, string>;
  signal?: RequestInit["signal"];
  timeoutMs?: number;
  cacheKey?: string;
  tags?: string[];
  operationName?: string;
}

export interface GraphQLClient {
  request<
    TData = unknown,
    TVariables extends object = Record<string, unknown>,
  >(options: GraphQLClientRequestOptions<TVariables>): Promise<TData>;
}

${runtimeEnums}

type TypedDocumentStringConstructor = {
  new <TResult = unknown, TVariables = unknown>(
    value: string,
    meta?: Record<string, unknown>,
  ): string;
};

const TypedDocumentString = class extends String {
  readonly value: string;
  readonly __meta__?: Record<string, unknown>;

  constructor(value: string, meta?: Record<string, unknown>) {
    super(value);
    this.value = value;
    this.__meta__ = meta;
  }

  override toString(): string {
    return this.value;
  }
} as unknown as TypedDocumentStringConstructor;
`;
};

const toPascalCase = (value) =>
	value
		.toLowerCase()
		.split("_")
		.filter(Boolean)
		.map((part) => part[0].toUpperCase() + part.slice(1))
		.join("");
