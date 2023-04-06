import { Module } from "@nestjs/common";
import { FumoResolver } from "./fumo.resolver";
import { FumoService } from "./fumo.service";

@Module({
    providers: [FumoResolver, FumoService]
})
export class FumoModule {}
