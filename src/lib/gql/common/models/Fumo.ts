import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Fumo {
	@Field(type => Int)
	id: number;

	@Field({ nullable: false })
	source: string;

	@Field({ nullable: true })
	caption: string;
}
