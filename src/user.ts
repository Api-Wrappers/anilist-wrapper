import { Request } from "./fetcher";
import { Data, DataRes, Result } from "./types";
import { NotLoggedInException } from "./utils/exceptions";
import { UserProfileQuery } from "./utils/queries";

class User {
  private access_token?: string;

  constructor(access_token?: string) {
    this.access_token = access_token;
  }

  getCurrentUser = async () => {
    if (!this.access_token) return new NotLoggedInException();

    const request = new Request(this.access_token);

    return await request.makeGQLRequest(`query{Viewer{${UserProfileQuery}}}`);
  };
}

(async () => {
  const user = new User(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQxZmM3NDdiZTMzNDI5NDhiYmE3MDBjODZhYmExYTU2NzkwYWQ3NTQ3ODVmNmQwOTQxNWU5MjI2MTZkYTZlZWU0YjIxMDA2Njc1ZjZhZTY1In0.eyJhdWQiOiIxMzMwMyIsImp0aSI6ImQxZmM3NDdiZTMzNDI5NDhiYmE3MDBjODZhYmExYTU2NzkwYWQ3NTQ3ODVmNmQwOTQxNWU5MjI2MTZkYTZlZWU0YjIxMDA2Njc1ZjZhZTY1IiwiaWF0IjoxNjg4MDQwNTU2LCJuYmYiOjE2ODgwNDA1NTYsImV4cCI6MTcxOTY2Mjk1Niwic3ViIjoiNTk2MTA4OCIsInNjb3BlcyI6W119.tXgKwnHFgUTL9mAqaT2diZUY2tnQJTJ0IGX21z3U2EYtspBIYTb123vIYnO0BWqVJzNZQ2LGl-wtCFgEwjPQlnRfpyD3GuOydPqA7S3kFSNDFSMoGOIq2b2DSSxfEqGG3WHKs6XSfnFwOO6cYAdcuwQs8zUuLJXLLDXufoWkko4-gleatBv9acMdVtx9dk0AJGGXpgtYsXRh5V7VA6aAE8OkwRQMYcTB9MtO8SzTlEjYSV7LOi9O5lbAB4-XJUmXLdt01A_qkB6SGZuIiRNNbD4jBKubI6bifFwLQ-mYdqbbrf1BRphprJZQkuaeUTHJBNenUPrnDS-I7-IRtCiTV4d90T5PkCX70d5xvvw-lgZTuUu3yir9-MjzlSl1g3FqhpZbS1Vf8SleJJfGPSkEb7loNzy1g5iitHqMs45TuoWVKoARnhLecduSr4nKogglrVIzTA33RzG5NHttxKVOBaP8A1PVMB_Co-DmkoFDqVhUrLJQZURaX0ucg2kf5NZYJiih71P0UYug_OdjVvo1PyTnkCGkvmfLktuVx8UOKLdfGcufh47WMTHFp1O5Cke3yFYya8z3l6HyoTdJ1wdCQDA6XeDSNnLDv9kg2cH8oVKZhvMTRykIgWh-th7twENEDpjFNEPJCnODpiBjWvehG3kGnwgtVLcGvMfHmmr39O0"
  );

  console.log((await user.getCurrentUser()) as any);
})();

export { User };
