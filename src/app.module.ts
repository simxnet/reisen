import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { FumoModule } from "./modules/fumo/fumo.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaModule } from "nestjs-prisma";

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      inject: [ConfigService],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => ({
          playground: {
              settings: {
                  'editor.theme': 'dark',
                  'editor.fontFamily': '"Fira Code", "MesloLGS NF", "Menlo", Consolas, "Courier New", monospace',
                  'editor.reuseHeaders': true,
                  'request.credentials': 'include'
              }
          },
          introspection: true,
          path: configService.get<string>('GRAPHQL_ENDPOINT', '/'),
          autoSchemaFile: true,
          context: (
              { req, res }: { req: Request; res: Response }
          ) => ({ headers: req.headers, req, res })
      })
  }),

  PrismaModule.forRoot({
      isGlobal: true
  }),

    FumoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
