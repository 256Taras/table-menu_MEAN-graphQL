import {Query, Resolver} from "@nestjs/graphql";

@Resolver("app")
export class AppResolver {
  @Query('test')
  async getDate() {
    return `It's Graphql resolver`
  }
}
