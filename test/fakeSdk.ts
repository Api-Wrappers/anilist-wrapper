import type { ANILISTSDK } from "../src/@types";

export type SdkOperation = keyof ANILISTSDK;
export type SdkVariables<TOperation extends SdkOperation> = Parameters<
	ANILISTSDK[TOperation]
>[0];
export type SdkResult<TOperation extends SdkOperation> = Awaited<
	ReturnType<ANILISTSDK[TOperation]>
>;

export type RecordedSdkCall<TOperation extends SdkOperation = SdkOperation> = {
	operation: TOperation;
	variables: SdkVariables<TOperation>;
};

export const sdkResult = <TOperation extends SdkOperation>(
	_operation: TOperation,
	response: unknown,
): SdkResult<TOperation> => response as SdkResult<TOperation>;

export class FakeSdk {
	readonly calls: Array<RecordedSdkCall> = [];
	private readonly responses = new Map<SdkOperation, unknown>();

	client(): ANILISTSDK {
		return new Proxy({} as ANILISTSDK, {
			get: (_target, property) => {
				if (typeof property !== "string") return undefined;
				return (variables: unknown) => this.record(property as SdkOperation, variables);
			},
		});
	}

	respond<TOperation extends SdkOperation>(
		operation: TOperation,
		response: SdkResult<TOperation>,
	) {
		this.responses.set(operation, response);
		return this;
	}

	lastCall<TOperation extends SdkOperation>(
		operation: TOperation,
	): RecordedSdkCall<TOperation> {
		const call = [...this.calls]
			.reverse()
			.find((entry) => entry.operation === operation);

		if (!call) {
			throw new Error(`Expected ${String(operation)} to have been called.`);
		}

		return call as RecordedSdkCall<TOperation>;
	}

	private record<TOperation extends SdkOperation>(
		operation: TOperation,
		variables: unknown,
	): Promise<SdkResult<TOperation>> {
		this.calls.push({
			operation,
			variables: variables as SdkVariables<TOperation>,
		});

		return Promise.resolve(
			this.responses.get(operation) as SdkResult<TOperation>,
		);
	}
}
