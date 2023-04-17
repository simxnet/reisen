import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { FumoService } from "./fumo.service";
import { PaginationArgs } from "@/lib/gql/common/pagination/pagination.args";
import { FumosConnection } from "@/lib/gql/objects/pages";
import { Fumo } from "@/lib/gql/common/models/Fumo";
import { AddFumoInput } from "./dto/add-fumo";

@Resolver(() => Fumo)
export class FumoResolver {
	public constructor(private readonly _fumoService: FumoService) {}

	@Query(() => FumosConnection)
	public async fumos(
		@Args() paginated: PaginationArgs,
	) {
		return this._fumoService.getFumos(paginated);
	}

	@Query(() => Fumo)
	public async fumo(
		@Args("id") id: number,
	) {
		return this._fumoService.getFumo({ id });
	}

	@Mutation(() => Fumo)
	public async addFumo(
		@Args() input: AddFumoInput,
	) {
		return this._fumoService.addFumo(input);
	}
}
