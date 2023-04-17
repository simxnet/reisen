import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PaginationArgs } from "@/lib/gql/common/pagination/pagination.args";
import { FumosConnection } from "@/lib/gql/objects/pages";
import {
	type PrismaFindManyArguments,
	findManyCursorConnection,
} from "@devoxa/prisma-relay-cursor-connection";
import { type Prisma } from "@prisma/client";
import { Fumo } from "@/lib/gql/common/models/Fumo";

@Injectable()
export class FumoService {
	public constructor(private readonly _prismaService: PrismaService) {}

	public async getFumos({
		first,
		last,
		before,
		after,
	}: PaginationArgs): Promise<FumosConnection> {
		return findManyCursorConnection(
			(args: PrismaFindManyArguments<{ id: number }>) =>
				this._prismaService.fumo.findMany({
					...args,
				}),
			() => this._prismaService.fumo.count(),
			{ first, last, before, after },
		);
	}

	public async getFumo({ id }: { id: number }): Promise<Fumo> {
		return this._prismaService.fumo.findFirst({
			where: {
				id,
			},
		});
	}

	public async addFumo(data: Prisma.FumoCreateInput) {
		return this._prismaService.fumo.create({
			data,
		});
	}
}
