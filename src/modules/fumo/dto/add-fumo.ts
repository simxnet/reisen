import { ArgsType, Field, InputType, Int } from "@nestjs/graphql";

@InputType()
@ArgsType()
export class AddFumoInput {
	@Field(() => String)
	public source!: string;

	@Field(() => String)
	public caption?: string;
}
