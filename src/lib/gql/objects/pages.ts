import { Fumo } from "../common/models/Fumo";
import { Paginated } from "../common/pagination/pagination";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FumosConnection extends Paginated(Fumo) {}
