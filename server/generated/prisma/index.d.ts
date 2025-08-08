
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model articulo
 * 
 */
export type articulo = $Result.DefaultSelection<Prisma.$articuloPayload>
/**
 * Model pieza
 * 
 */
export type pieza = $Result.DefaultSelection<Prisma.$piezaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articulos
 * const articulos = await prisma.articulo.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articulos
   * const articulos = await prisma.articulo.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.articulo`: Exposes CRUD operations for the **articulo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articulos
    * const articulos = await prisma.articulo.findMany()
    * ```
    */
  get articulo(): Prisma.articuloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pieza`: Exposes CRUD operations for the **pieza** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Piezas
    * const piezas = await prisma.pieza.findMany()
    * ```
    */
  get pieza(): Prisma.piezaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    articulo: 'articulo',
    pieza: 'pieza'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "articulo" | "pieza"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      articulo: {
        payload: Prisma.$articuloPayload<ExtArgs>
        fields: Prisma.articuloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articuloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articuloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>
          }
          findFirst: {
            args: Prisma.articuloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articuloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>
          }
          findMany: {
            args: Prisma.articuloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>[]
          }
          create: {
            args: Prisma.articuloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>
          }
          createMany: {
            args: Prisma.articuloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.articuloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>
          }
          update: {
            args: Prisma.articuloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>
          }
          deleteMany: {
            args: Prisma.articuloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articuloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.articuloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>
          }
          aggregate: {
            args: Prisma.ArticuloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticulo>
          }
          groupBy: {
            args: Prisma.articuloGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticuloGroupByOutputType>[]
          }
          count: {
            args: Prisma.articuloCountArgs<ExtArgs>
            result: $Utils.Optional<ArticuloCountAggregateOutputType> | number
          }
        }
      }
      pieza: {
        payload: Prisma.$piezaPayload<ExtArgs>
        fields: Prisma.piezaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.piezaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.piezaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>
          }
          findFirst: {
            args: Prisma.piezaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.piezaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>
          }
          findMany: {
            args: Prisma.piezaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>[]
          }
          create: {
            args: Prisma.piezaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>
          }
          createMany: {
            args: Prisma.piezaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.piezaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>
          }
          update: {
            args: Prisma.piezaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>
          }
          deleteMany: {
            args: Prisma.piezaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.piezaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.piezaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>
          }
          aggregate: {
            args: Prisma.PiezaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePieza>
          }
          groupBy: {
            args: Prisma.piezaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiezaGroupByOutputType>[]
          }
          count: {
            args: Prisma.piezaCountArgs<ExtArgs>
            result: $Utils.Optional<PiezaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    articulo?: articuloOmit
    pieza?: piezaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model articulo
   */

  export type AggregateArticulo = {
    _count: ArticuloCountAggregateOutputType | null
    _avg: ArticuloAvgAggregateOutputType | null
    _sum: ArticuloSumAggregateOutputType | null
    _min: ArticuloMinAggregateOutputType | null
    _max: ArticuloMaxAggregateOutputType | null
  }

  export type ArticuloAvgAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    cant_piezas: number | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloSumAggregateOutputType = {
    id: number | null
    cliente_id: number | null
    cant_piezas: number | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloMinAggregateOutputType = {
    id: number | null
    him_codigo: string | null
    cliente_id: number | null
    nombre: string | null
    cant_piezas: number | null
    plano: string | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloMaxAggregateOutputType = {
    id: number | null
    him_codigo: string | null
    cliente_id: number | null
    nombre: string | null
    cant_piezas: number | null
    plano: string | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloCountAggregateOutputType = {
    id: number
    him_codigo: number
    cliente_id: number
    nombre: number
    cant_piezas: number
    plano: number
    precio: number
    cte_ganancia: number
    _all: number
  }


  export type ArticuloAvgAggregateInputType = {
    id?: true
    cliente_id?: true
    cant_piezas?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloSumAggregateInputType = {
    id?: true
    cliente_id?: true
    cant_piezas?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloMinAggregateInputType = {
    id?: true
    him_codigo?: true
    cliente_id?: true
    nombre?: true
    cant_piezas?: true
    plano?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloMaxAggregateInputType = {
    id?: true
    him_codigo?: true
    cliente_id?: true
    nombre?: true
    cant_piezas?: true
    plano?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloCountAggregateInputType = {
    id?: true
    him_codigo?: true
    cliente_id?: true
    nombre?: true
    cant_piezas?: true
    plano?: true
    precio?: true
    cte_ganancia?: true
    _all?: true
  }

  export type ArticuloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articulo to aggregate.
     */
    where?: articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulos to fetch.
     */
    orderBy?: articuloOrderByWithRelationInput | articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articulos
    **/
    _count?: true | ArticuloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticuloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticuloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticuloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticuloMaxAggregateInputType
  }

  export type GetArticuloAggregateType<T extends ArticuloAggregateArgs> = {
        [P in keyof T & keyof AggregateArticulo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticulo[P]>
      : GetScalarType<T[P], AggregateArticulo[P]>
  }




  export type articuloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articuloWhereInput
    orderBy?: articuloOrderByWithAggregationInput | articuloOrderByWithAggregationInput[]
    by: ArticuloScalarFieldEnum[] | ArticuloScalarFieldEnum
    having?: articuloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticuloCountAggregateInputType | true
    _avg?: ArticuloAvgAggregateInputType
    _sum?: ArticuloSumAggregateInputType
    _min?: ArticuloMinAggregateInputType
    _max?: ArticuloMaxAggregateInputType
  }

  export type ArticuloGroupByOutputType = {
    id: number
    him_codigo: string
    cliente_id: number | null
    nombre: string | null
    cant_piezas: number | null
    plano: string | null
    precio: number | null
    cte_ganancia: number | null
    _count: ArticuloCountAggregateOutputType | null
    _avg: ArticuloAvgAggregateOutputType | null
    _sum: ArticuloSumAggregateOutputType | null
    _min: ArticuloMinAggregateOutputType | null
    _max: ArticuloMaxAggregateOutputType | null
  }

  type GetArticuloGroupByPayload<T extends articuloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticuloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticuloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticuloGroupByOutputType[P]>
            : GetScalarType<T[P], ArticuloGroupByOutputType[P]>
        }
      >
    >


  export type articuloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    him_codigo?: boolean
    cliente_id?: boolean
    nombre?: boolean
    cant_piezas?: boolean
    plano?: boolean
    precio?: boolean
    cte_ganancia?: boolean
  }, ExtArgs["result"]["articulo"]>



  export type articuloSelectScalar = {
    id?: boolean
    him_codigo?: boolean
    cliente_id?: boolean
    nombre?: boolean
    cant_piezas?: boolean
    plano?: boolean
    precio?: boolean
    cte_ganancia?: boolean
  }

  export type articuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "him_codigo" | "cliente_id" | "nombre" | "cant_piezas" | "plano" | "precio" | "cte_ganancia", ExtArgs["result"]["articulo"]>

  export type $articuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articulo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      him_codigo: string
      cliente_id: number | null
      nombre: string | null
      cant_piezas: number | null
      plano: string | null
      precio: number | null
      cte_ganancia: number | null
    }, ExtArgs["result"]["articulo"]>
    composites: {}
  }

  type articuloGetPayload<S extends boolean | null | undefined | articuloDefaultArgs> = $Result.GetResult<Prisma.$articuloPayload, S>

  type articuloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articuloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticuloCountAggregateInputType | true
    }

  export interface articuloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articulo'], meta: { name: 'articulo' } }
    /**
     * Find zero or one Articulo that matches the filter.
     * @param {articuloFindUniqueArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articuloFindUniqueArgs>(args: SelectSubset<T, articuloFindUniqueArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articulo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articuloFindUniqueOrThrowArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articuloFindUniqueOrThrowArgs>(args: SelectSubset<T, articuloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articuloFindFirstArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articuloFindFirstArgs>(args?: SelectSubset<T, articuloFindFirstArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articuloFindFirstOrThrowArgs} args - Arguments to find a Articulo
     * @example
     * // Get one Articulo
     * const articulo = await prisma.articulo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articuloFindFirstOrThrowArgs>(args?: SelectSubset<T, articuloFindFirstOrThrowArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articuloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articulos
     * const articulos = await prisma.articulo.findMany()
     * 
     * // Get first 10 Articulos
     * const articulos = await prisma.articulo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articuloWithIdOnly = await prisma.articulo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends articuloFindManyArgs>(args?: SelectSubset<T, articuloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articulo.
     * @param {articuloCreateArgs} args - Arguments to create a Articulo.
     * @example
     * // Create one Articulo
     * const Articulo = await prisma.articulo.create({
     *   data: {
     *     // ... data to create a Articulo
     *   }
     * })
     * 
     */
    create<T extends articuloCreateArgs>(args: SelectSubset<T, articuloCreateArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articulos.
     * @param {articuloCreateManyArgs} args - Arguments to create many Articulos.
     * @example
     * // Create many Articulos
     * const articulo = await prisma.articulo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articuloCreateManyArgs>(args?: SelectSubset<T, articuloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articulo.
     * @param {articuloDeleteArgs} args - Arguments to delete one Articulo.
     * @example
     * // Delete one Articulo
     * const Articulo = await prisma.articulo.delete({
     *   where: {
     *     // ... filter to delete one Articulo
     *   }
     * })
     * 
     */
    delete<T extends articuloDeleteArgs>(args: SelectSubset<T, articuloDeleteArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articulo.
     * @param {articuloUpdateArgs} args - Arguments to update one Articulo.
     * @example
     * // Update one Articulo
     * const articulo = await prisma.articulo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articuloUpdateArgs>(args: SelectSubset<T, articuloUpdateArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articulos.
     * @param {articuloDeleteManyArgs} args - Arguments to filter Articulos to delete.
     * @example
     * // Delete a few Articulos
     * const { count } = await prisma.articulo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articuloDeleteManyArgs>(args?: SelectSubset<T, articuloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articuloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articulos
     * const articulo = await prisma.articulo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articuloUpdateManyArgs>(args: SelectSubset<T, articuloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articulo.
     * @param {articuloUpsertArgs} args - Arguments to update or create a Articulo.
     * @example
     * // Update or create a Articulo
     * const articulo = await prisma.articulo.upsert({
     *   create: {
     *     // ... data to create a Articulo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articulo we want to update
     *   }
     * })
     */
    upsert<T extends articuloUpsertArgs>(args: SelectSubset<T, articuloUpsertArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articuloCountArgs} args - Arguments to filter Articulos to count.
     * @example
     * // Count the number of Articulos
     * const count = await prisma.articulo.count({
     *   where: {
     *     // ... the filter for the Articulos we want to count
     *   }
     * })
    **/
    count<T extends articuloCountArgs>(
      args?: Subset<T, articuloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticuloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticuloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticuloAggregateArgs>(args: Subset<T, ArticuloAggregateArgs>): Prisma.PrismaPromise<GetArticuloAggregateType<T>>

    /**
     * Group by Articulo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articuloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends articuloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articuloGroupByArgs['orderBy'] }
        : { orderBy?: articuloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, articuloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articulo model
   */
  readonly fields: articuloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articulo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articuloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the articulo model
   */
  interface articuloFieldRefs {
    readonly id: FieldRef<"articulo", 'Int'>
    readonly him_codigo: FieldRef<"articulo", 'String'>
    readonly cliente_id: FieldRef<"articulo", 'Int'>
    readonly nombre: FieldRef<"articulo", 'String'>
    readonly cant_piezas: FieldRef<"articulo", 'Int'>
    readonly plano: FieldRef<"articulo", 'String'>
    readonly precio: FieldRef<"articulo", 'Int'>
    readonly cte_ganancia: FieldRef<"articulo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * articulo findUnique
   */
  export type articuloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * Filter, which articulo to fetch.
     */
    where: articuloWhereUniqueInput
  }

  /**
   * articulo findUniqueOrThrow
   */
  export type articuloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * Filter, which articulo to fetch.
     */
    where: articuloWhereUniqueInput
  }

  /**
   * articulo findFirst
   */
  export type articuloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * Filter, which articulo to fetch.
     */
    where?: articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulos to fetch.
     */
    orderBy?: articuloOrderByWithRelationInput | articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articulos.
     */
    cursor?: articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articulos.
     */
    distinct?: ArticuloScalarFieldEnum | ArticuloScalarFieldEnum[]
  }

  /**
   * articulo findFirstOrThrow
   */
  export type articuloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * Filter, which articulo to fetch.
     */
    where?: articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulos to fetch.
     */
    orderBy?: articuloOrderByWithRelationInput | articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articulos.
     */
    cursor?: articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articulos.
     */
    distinct?: ArticuloScalarFieldEnum | ArticuloScalarFieldEnum[]
  }

  /**
   * articulo findMany
   */
  export type articuloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * Filter, which articulos to fetch.
     */
    where?: articuloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulos to fetch.
     */
    orderBy?: articuloOrderByWithRelationInput | articuloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articulos.
     */
    cursor?: articuloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulos.
     */
    skip?: number
    distinct?: ArticuloScalarFieldEnum | ArticuloScalarFieldEnum[]
  }

  /**
   * articulo create
   */
  export type articuloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * The data needed to create a articulo.
     */
    data: XOR<articuloCreateInput, articuloUncheckedCreateInput>
  }

  /**
   * articulo createMany
   */
  export type articuloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articulos.
     */
    data: articuloCreateManyInput | articuloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articulo update
   */
  export type articuloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * The data needed to update a articulo.
     */
    data: XOR<articuloUpdateInput, articuloUncheckedUpdateInput>
    /**
     * Choose, which articulo to update.
     */
    where: articuloWhereUniqueInput
  }

  /**
   * articulo updateMany
   */
  export type articuloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articulos.
     */
    data: XOR<articuloUpdateManyMutationInput, articuloUncheckedUpdateManyInput>
    /**
     * Filter which articulos to update
     */
    where?: articuloWhereInput
    /**
     * Limit how many articulos to update.
     */
    limit?: number
  }

  /**
   * articulo upsert
   */
  export type articuloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * The filter to search for the articulo to update in case it exists.
     */
    where: articuloWhereUniqueInput
    /**
     * In case the articulo found by the `where` argument doesn't exist, create a new articulo with this data.
     */
    create: XOR<articuloCreateInput, articuloUncheckedCreateInput>
    /**
     * In case the articulo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articuloUpdateInput, articuloUncheckedUpdateInput>
  }

  /**
   * articulo delete
   */
  export type articuloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
    /**
     * Filter which articulo to delete.
     */
    where: articuloWhereUniqueInput
  }

  /**
   * articulo deleteMany
   */
  export type articuloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articulos to delete
     */
    where?: articuloWhereInput
    /**
     * Limit how many articulos to delete.
     */
    limit?: number
  }

  /**
   * articulo without action
   */
  export type articuloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
  }


  /**
   * Model pieza
   */

  export type AggregatePieza = {
    _count: PiezaCountAggregateOutputType | null
    _avg: PiezaAvgAggregateOutputType | null
    _sum: PiezaSumAggregateOutputType | null
    _min: PiezaMinAggregateOutputType | null
    _max: PiezaMaxAggregateOutputType | null
  }

  export type PiezaAvgAggregateOutputType = {
    id: number | null
    precio_mat_prima: number | null
    cte_ganancia: number | null
  }

  export type PiezaSumAggregateOutputType = {
    id: number | null
    precio_mat_prima: number | null
    cte_ganancia: number | null
  }

  export type PiezaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio_mat_prima: number | null
    plano_pleg_DWG: string | null
    plano_pleg_SOLID: string | null
    plano_laser_DXF: string | null
    cte_ganancia: number | null
  }

  export type PiezaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio_mat_prima: number | null
    plano_pleg_DWG: string | null
    plano_pleg_SOLID: string | null
    plano_laser_DXF: string | null
    cte_ganancia: number | null
  }

  export type PiezaCountAggregateOutputType = {
    id: number
    nombre: number
    precio_mat_prima: number
    plano_pleg_DWG: number
    plano_pleg_SOLID: number
    plano_laser_DXF: number
    cte_ganancia: number
    _all: number
  }


  export type PiezaAvgAggregateInputType = {
    id?: true
    precio_mat_prima?: true
    cte_ganancia?: true
  }

  export type PiezaSumAggregateInputType = {
    id?: true
    precio_mat_prima?: true
    cte_ganancia?: true
  }

  export type PiezaMinAggregateInputType = {
    id?: true
    nombre?: true
    precio_mat_prima?: true
    plano_pleg_DWG?: true
    plano_pleg_SOLID?: true
    plano_laser_DXF?: true
    cte_ganancia?: true
  }

  export type PiezaMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio_mat_prima?: true
    plano_pleg_DWG?: true
    plano_pleg_SOLID?: true
    plano_laser_DXF?: true
    cte_ganancia?: true
  }

  export type PiezaCountAggregateInputType = {
    id?: true
    nombre?: true
    precio_mat_prima?: true
    plano_pleg_DWG?: true
    plano_pleg_SOLID?: true
    plano_laser_DXF?: true
    cte_ganancia?: true
    _all?: true
  }

  export type PiezaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pieza to aggregate.
     */
    where?: piezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piezas to fetch.
     */
    orderBy?: piezaOrderByWithRelationInput | piezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: piezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned piezas
    **/
    _count?: true | PiezaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PiezaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PiezaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiezaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiezaMaxAggregateInputType
  }

  export type GetPiezaAggregateType<T extends PiezaAggregateArgs> = {
        [P in keyof T & keyof AggregatePieza]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePieza[P]>
      : GetScalarType<T[P], AggregatePieza[P]>
  }




  export type piezaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: piezaWhereInput
    orderBy?: piezaOrderByWithAggregationInput | piezaOrderByWithAggregationInput[]
    by: PiezaScalarFieldEnum[] | PiezaScalarFieldEnum
    having?: piezaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiezaCountAggregateInputType | true
    _avg?: PiezaAvgAggregateInputType
    _sum?: PiezaSumAggregateInputType
    _min?: PiezaMinAggregateInputType
    _max?: PiezaMaxAggregateInputType
  }

  export type PiezaGroupByOutputType = {
    id: number
    nombre: string | null
    precio_mat_prima: number | null
    plano_pleg_DWG: string | null
    plano_pleg_SOLID: string | null
    plano_laser_DXF: string | null
    cte_ganancia: number | null
    _count: PiezaCountAggregateOutputType | null
    _avg: PiezaAvgAggregateOutputType | null
    _sum: PiezaSumAggregateOutputType | null
    _min: PiezaMinAggregateOutputType | null
    _max: PiezaMaxAggregateOutputType | null
  }

  type GetPiezaGroupByPayload<T extends piezaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiezaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiezaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiezaGroupByOutputType[P]>
            : GetScalarType<T[P], PiezaGroupByOutputType[P]>
        }
      >
    >


  export type piezaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio_mat_prima?: boolean
    plano_pleg_DWG?: boolean
    plano_pleg_SOLID?: boolean
    plano_laser_DXF?: boolean
    cte_ganancia?: boolean
  }, ExtArgs["result"]["pieza"]>



  export type piezaSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio_mat_prima?: boolean
    plano_pleg_DWG?: boolean
    plano_pleg_SOLID?: boolean
    plano_laser_DXF?: boolean
    cte_ganancia?: boolean
  }

  export type piezaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio_mat_prima" | "plano_pleg_DWG" | "plano_pleg_SOLID" | "plano_laser_DXF" | "cte_ganancia", ExtArgs["result"]["pieza"]>

  export type $piezaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pieza"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      precio_mat_prima: number | null
      plano_pleg_DWG: string | null
      plano_pleg_SOLID: string | null
      plano_laser_DXF: string | null
      cte_ganancia: number | null
    }, ExtArgs["result"]["pieza"]>
    composites: {}
  }

  type piezaGetPayload<S extends boolean | null | undefined | piezaDefaultArgs> = $Result.GetResult<Prisma.$piezaPayload, S>

  type piezaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<piezaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiezaCountAggregateInputType | true
    }

  export interface piezaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pieza'], meta: { name: 'pieza' } }
    /**
     * Find zero or one Pieza that matches the filter.
     * @param {piezaFindUniqueArgs} args - Arguments to find a Pieza
     * @example
     * // Get one Pieza
     * const pieza = await prisma.pieza.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends piezaFindUniqueArgs>(args: SelectSubset<T, piezaFindUniqueArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pieza that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {piezaFindUniqueOrThrowArgs} args - Arguments to find a Pieza
     * @example
     * // Get one Pieza
     * const pieza = await prisma.pieza.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends piezaFindUniqueOrThrowArgs>(args: SelectSubset<T, piezaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pieza that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piezaFindFirstArgs} args - Arguments to find a Pieza
     * @example
     * // Get one Pieza
     * const pieza = await prisma.pieza.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends piezaFindFirstArgs>(args?: SelectSubset<T, piezaFindFirstArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pieza that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piezaFindFirstOrThrowArgs} args - Arguments to find a Pieza
     * @example
     * // Get one Pieza
     * const pieza = await prisma.pieza.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends piezaFindFirstOrThrowArgs>(args?: SelectSubset<T, piezaFindFirstOrThrowArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Piezas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piezaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Piezas
     * const piezas = await prisma.pieza.findMany()
     * 
     * // Get first 10 Piezas
     * const piezas = await prisma.pieza.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piezaWithIdOnly = await prisma.pieza.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends piezaFindManyArgs>(args?: SelectSubset<T, piezaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pieza.
     * @param {piezaCreateArgs} args - Arguments to create a Pieza.
     * @example
     * // Create one Pieza
     * const Pieza = await prisma.pieza.create({
     *   data: {
     *     // ... data to create a Pieza
     *   }
     * })
     * 
     */
    create<T extends piezaCreateArgs>(args: SelectSubset<T, piezaCreateArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Piezas.
     * @param {piezaCreateManyArgs} args - Arguments to create many Piezas.
     * @example
     * // Create many Piezas
     * const pieza = await prisma.pieza.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends piezaCreateManyArgs>(args?: SelectSubset<T, piezaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pieza.
     * @param {piezaDeleteArgs} args - Arguments to delete one Pieza.
     * @example
     * // Delete one Pieza
     * const Pieza = await prisma.pieza.delete({
     *   where: {
     *     // ... filter to delete one Pieza
     *   }
     * })
     * 
     */
    delete<T extends piezaDeleteArgs>(args: SelectSubset<T, piezaDeleteArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pieza.
     * @param {piezaUpdateArgs} args - Arguments to update one Pieza.
     * @example
     * // Update one Pieza
     * const pieza = await prisma.pieza.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends piezaUpdateArgs>(args: SelectSubset<T, piezaUpdateArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Piezas.
     * @param {piezaDeleteManyArgs} args - Arguments to filter Piezas to delete.
     * @example
     * // Delete a few Piezas
     * const { count } = await prisma.pieza.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends piezaDeleteManyArgs>(args?: SelectSubset<T, piezaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Piezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piezaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Piezas
     * const pieza = await prisma.pieza.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends piezaUpdateManyArgs>(args: SelectSubset<T, piezaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pieza.
     * @param {piezaUpsertArgs} args - Arguments to update or create a Pieza.
     * @example
     * // Update or create a Pieza
     * const pieza = await prisma.pieza.upsert({
     *   create: {
     *     // ... data to create a Pieza
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pieza we want to update
     *   }
     * })
     */
    upsert<T extends piezaUpsertArgs>(args: SelectSubset<T, piezaUpsertArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Piezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piezaCountArgs} args - Arguments to filter Piezas to count.
     * @example
     * // Count the number of Piezas
     * const count = await prisma.pieza.count({
     *   where: {
     *     // ... the filter for the Piezas we want to count
     *   }
     * })
    **/
    count<T extends piezaCountArgs>(
      args?: Subset<T, piezaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiezaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pieza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiezaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PiezaAggregateArgs>(args: Subset<T, PiezaAggregateArgs>): Prisma.PrismaPromise<GetPiezaAggregateType<T>>

    /**
     * Group by Pieza.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piezaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends piezaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: piezaGroupByArgs['orderBy'] }
        : { orderBy?: piezaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, piezaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiezaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pieza model
   */
  readonly fields: piezaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pieza.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__piezaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pieza model
   */
  interface piezaFieldRefs {
    readonly id: FieldRef<"pieza", 'Int'>
    readonly nombre: FieldRef<"pieza", 'String'>
    readonly precio_mat_prima: FieldRef<"pieza", 'Int'>
    readonly plano_pleg_DWG: FieldRef<"pieza", 'String'>
    readonly plano_pleg_SOLID: FieldRef<"pieza", 'String'>
    readonly plano_laser_DXF: FieldRef<"pieza", 'String'>
    readonly cte_ganancia: FieldRef<"pieza", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pieza findUnique
   */
  export type piezaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * Filter, which pieza to fetch.
     */
    where: piezaWhereUniqueInput
  }

  /**
   * pieza findUniqueOrThrow
   */
  export type piezaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * Filter, which pieza to fetch.
     */
    where: piezaWhereUniqueInput
  }

  /**
   * pieza findFirst
   */
  export type piezaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * Filter, which pieza to fetch.
     */
    where?: piezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piezas to fetch.
     */
    orderBy?: piezaOrderByWithRelationInput | piezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for piezas.
     */
    cursor?: piezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of piezas.
     */
    distinct?: PiezaScalarFieldEnum | PiezaScalarFieldEnum[]
  }

  /**
   * pieza findFirstOrThrow
   */
  export type piezaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * Filter, which pieza to fetch.
     */
    where?: piezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piezas to fetch.
     */
    orderBy?: piezaOrderByWithRelationInput | piezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for piezas.
     */
    cursor?: piezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of piezas.
     */
    distinct?: PiezaScalarFieldEnum | PiezaScalarFieldEnum[]
  }

  /**
   * pieza findMany
   */
  export type piezaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * Filter, which piezas to fetch.
     */
    where?: piezaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of piezas to fetch.
     */
    orderBy?: piezaOrderByWithRelationInput | piezaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing piezas.
     */
    cursor?: piezaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` piezas.
     */
    skip?: number
    distinct?: PiezaScalarFieldEnum | PiezaScalarFieldEnum[]
  }

  /**
   * pieza create
   */
  export type piezaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * The data needed to create a pieza.
     */
    data?: XOR<piezaCreateInput, piezaUncheckedCreateInput>
  }

  /**
   * pieza createMany
   */
  export type piezaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many piezas.
     */
    data: piezaCreateManyInput | piezaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pieza update
   */
  export type piezaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * The data needed to update a pieza.
     */
    data: XOR<piezaUpdateInput, piezaUncheckedUpdateInput>
    /**
     * Choose, which pieza to update.
     */
    where: piezaWhereUniqueInput
  }

  /**
   * pieza updateMany
   */
  export type piezaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update piezas.
     */
    data: XOR<piezaUpdateManyMutationInput, piezaUncheckedUpdateManyInput>
    /**
     * Filter which piezas to update
     */
    where?: piezaWhereInput
    /**
     * Limit how many piezas to update.
     */
    limit?: number
  }

  /**
   * pieza upsert
   */
  export type piezaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * The filter to search for the pieza to update in case it exists.
     */
    where: piezaWhereUniqueInput
    /**
     * In case the pieza found by the `where` argument doesn't exist, create a new pieza with this data.
     */
    create: XOR<piezaCreateInput, piezaUncheckedCreateInput>
    /**
     * In case the pieza was found with the provided `where` argument, update it with this data.
     */
    update: XOR<piezaUpdateInput, piezaUncheckedUpdateInput>
  }

  /**
   * pieza delete
   */
  export type piezaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
    /**
     * Filter which pieza to delete.
     */
    where: piezaWhereUniqueInput
  }

  /**
   * pieza deleteMany
   */
  export type piezaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which piezas to delete
     */
    where?: piezaWhereInput
    /**
     * Limit how many piezas to delete.
     */
    limit?: number
  }

  /**
   * pieza without action
   */
  export type piezaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ArticuloScalarFieldEnum: {
    id: 'id',
    him_codigo: 'him_codigo',
    cliente_id: 'cliente_id',
    nombre: 'nombre',
    cant_piezas: 'cant_piezas',
    plano: 'plano',
    precio: 'precio',
    cte_ganancia: 'cte_ganancia'
  };

  export type ArticuloScalarFieldEnum = (typeof ArticuloScalarFieldEnum)[keyof typeof ArticuloScalarFieldEnum]


  export const PiezaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio_mat_prima: 'precio_mat_prima',
    plano_pleg_DWG: 'plano_pleg_DWG',
    plano_pleg_SOLID: 'plano_pleg_SOLID',
    plano_laser_DXF: 'plano_laser_DXF',
    cte_ganancia: 'cte_ganancia'
  };

  export type PiezaScalarFieldEnum = (typeof PiezaScalarFieldEnum)[keyof typeof PiezaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const articuloOrderByRelevanceFieldEnum: {
    him_codigo: 'him_codigo',
    nombre: 'nombre',
    plano: 'plano'
  };

  export type articuloOrderByRelevanceFieldEnum = (typeof articuloOrderByRelevanceFieldEnum)[keyof typeof articuloOrderByRelevanceFieldEnum]


  export const piezaOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    plano_pleg_DWG: 'plano_pleg_DWG',
    plano_pleg_SOLID: 'plano_pleg_SOLID',
    plano_laser_DXF: 'plano_laser_DXF'
  };

  export type piezaOrderByRelevanceFieldEnum = (typeof piezaOrderByRelevanceFieldEnum)[keyof typeof piezaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type articuloWhereInput = {
    AND?: articuloWhereInput | articuloWhereInput[]
    OR?: articuloWhereInput[]
    NOT?: articuloWhereInput | articuloWhereInput[]
    id?: IntFilter<"articulo"> | number
    him_codigo?: StringFilter<"articulo"> | string
    cliente_id?: IntNullableFilter<"articulo"> | number | null
    nombre?: StringNullableFilter<"articulo"> | string | null
    cant_piezas?: IntNullableFilter<"articulo"> | number | null
    plano?: StringNullableFilter<"articulo"> | string | null
    precio?: IntNullableFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableFilter<"articulo"> | number | null
  }

  export type articuloOrderByWithRelationInput = {
    id?: SortOrder
    him_codigo?: SortOrder
    cliente_id?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    cant_piezas?: SortOrderInput | SortOrder
    plano?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    _relevance?: articuloOrderByRelevanceInput
  }

  export type articuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    him_codigo?: string
    AND?: articuloWhereInput | articuloWhereInput[]
    OR?: articuloWhereInput[]
    NOT?: articuloWhereInput | articuloWhereInput[]
    cliente_id?: IntNullableFilter<"articulo"> | number | null
    nombre?: StringNullableFilter<"articulo"> | string | null
    cant_piezas?: IntNullableFilter<"articulo"> | number | null
    plano?: StringNullableFilter<"articulo"> | string | null
    precio?: IntNullableFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableFilter<"articulo"> | number | null
  }, "id" | "id" | "him_codigo">

  export type articuloOrderByWithAggregationInput = {
    id?: SortOrder
    him_codigo?: SortOrder
    cliente_id?: SortOrderInput | SortOrder
    nombre?: SortOrderInput | SortOrder
    cant_piezas?: SortOrderInput | SortOrder
    plano?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    _count?: articuloCountOrderByAggregateInput
    _avg?: articuloAvgOrderByAggregateInput
    _max?: articuloMaxOrderByAggregateInput
    _min?: articuloMinOrderByAggregateInput
    _sum?: articuloSumOrderByAggregateInput
  }

  export type articuloScalarWhereWithAggregatesInput = {
    AND?: articuloScalarWhereWithAggregatesInput | articuloScalarWhereWithAggregatesInput[]
    OR?: articuloScalarWhereWithAggregatesInput[]
    NOT?: articuloScalarWhereWithAggregatesInput | articuloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"articulo"> | number
    him_codigo?: StringWithAggregatesFilter<"articulo"> | string
    cliente_id?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    nombre?: StringNullableWithAggregatesFilter<"articulo"> | string | null
    cant_piezas?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    plano?: StringNullableWithAggregatesFilter<"articulo"> | string | null
    precio?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableWithAggregatesFilter<"articulo"> | number | null
  }

  export type piezaWhereInput = {
    AND?: piezaWhereInput | piezaWhereInput[]
    OR?: piezaWhereInput[]
    NOT?: piezaWhereInput | piezaWhereInput[]
    id?: IntFilter<"pieza"> | number
    nombre?: StringNullableFilter<"pieza"> | string | null
    precio_mat_prima?: IntNullableFilter<"pieza"> | number | null
    plano_pleg_DWG?: StringNullableFilter<"pieza"> | string | null
    plano_pleg_SOLID?: StringNullableFilter<"pieza"> | string | null
    plano_laser_DXF?: StringNullableFilter<"pieza"> | string | null
    cte_ganancia?: IntNullableFilter<"pieza"> | number | null
  }

  export type piezaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio_mat_prima?: SortOrderInput | SortOrder
    plano_pleg_DWG?: SortOrderInput | SortOrder
    plano_pleg_SOLID?: SortOrderInput | SortOrder
    plano_laser_DXF?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    _relevance?: piezaOrderByRelevanceInput
  }

  export type piezaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: piezaWhereInput | piezaWhereInput[]
    OR?: piezaWhereInput[]
    NOT?: piezaWhereInput | piezaWhereInput[]
    nombre?: StringNullableFilter<"pieza"> | string | null
    precio_mat_prima?: IntNullableFilter<"pieza"> | number | null
    plano_pleg_DWG?: StringNullableFilter<"pieza"> | string | null
    plano_pleg_SOLID?: StringNullableFilter<"pieza"> | string | null
    plano_laser_DXF?: StringNullableFilter<"pieza"> | string | null
    cte_ganancia?: IntNullableFilter<"pieza"> | number | null
  }, "id" | "id">

  export type piezaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio_mat_prima?: SortOrderInput | SortOrder
    plano_pleg_DWG?: SortOrderInput | SortOrder
    plano_pleg_SOLID?: SortOrderInput | SortOrder
    plano_laser_DXF?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    _count?: piezaCountOrderByAggregateInput
    _avg?: piezaAvgOrderByAggregateInput
    _max?: piezaMaxOrderByAggregateInput
    _min?: piezaMinOrderByAggregateInput
    _sum?: piezaSumOrderByAggregateInput
  }

  export type piezaScalarWhereWithAggregatesInput = {
    AND?: piezaScalarWhereWithAggregatesInput | piezaScalarWhereWithAggregatesInput[]
    OR?: piezaScalarWhereWithAggregatesInput[]
    NOT?: piezaScalarWhereWithAggregatesInput | piezaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pieza"> | number
    nombre?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    precio_mat_prima?: IntNullableWithAggregatesFilter<"pieza"> | number | null
    plano_pleg_DWG?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    plano_pleg_SOLID?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    plano_laser_DXF?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    cte_ganancia?: IntNullableWithAggregatesFilter<"pieza"> | number | null
  }

  export type articuloCreateInput = {
    him_codigo: string
    cliente_id?: number | null
    nombre?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
  }

  export type articuloUncheckedCreateInput = {
    id?: number
    him_codigo: string
    cliente_id?: number | null
    nombre?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
  }

  export type articuloUpdateInput = {
    him_codigo?: StringFieldUpdateOperationsInput | string
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    him_codigo?: StringFieldUpdateOperationsInput | string
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articuloCreateManyInput = {
    id?: number
    him_codigo: string
    cliente_id?: number | null
    nombre?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
  }

  export type articuloUpdateManyMutationInput = {
    him_codigo?: StringFieldUpdateOperationsInput | string
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    him_codigo?: StringFieldUpdateOperationsInput | string
    cliente_id?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaCreateInput = {
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
  }

  export type piezaUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
  }

  export type piezaUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaCreateManyInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
  }

  export type piezaUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type articuloOrderByRelevanceInput = {
    fields: articuloOrderByRelevanceFieldEnum | articuloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type articuloCountOrderByAggregateInput = {
    id?: SortOrder
    him_codigo?: SortOrder
    cliente_id?: SortOrder
    nombre?: SortOrder
    cant_piezas?: SortOrder
    plano?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloAvgOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    cant_piezas?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloMaxOrderByAggregateInput = {
    id?: SortOrder
    him_codigo?: SortOrder
    cliente_id?: SortOrder
    nombre?: SortOrder
    cant_piezas?: SortOrder
    plano?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloMinOrderByAggregateInput = {
    id?: SortOrder
    him_codigo?: SortOrder
    cliente_id?: SortOrder
    nombre?: SortOrder
    cant_piezas?: SortOrder
    plano?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloSumOrderByAggregateInput = {
    id?: SortOrder
    cliente_id?: SortOrder
    cant_piezas?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type piezaOrderByRelevanceInput = {
    fields: piezaOrderByRelevanceFieldEnum | piezaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type piezaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_mat_prima?: SortOrder
    plano_pleg_DWG?: SortOrder
    plano_pleg_SOLID?: SortOrder
    plano_laser_DXF?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type piezaAvgOrderByAggregateInput = {
    id?: SortOrder
    precio_mat_prima?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type piezaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_mat_prima?: SortOrder
    plano_pleg_DWG?: SortOrder
    plano_pleg_SOLID?: SortOrder
    plano_laser_DXF?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type piezaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_mat_prima?: SortOrder
    plano_pleg_DWG?: SortOrder
    plano_pleg_SOLID?: SortOrder
    plano_laser_DXF?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type piezaSumOrderByAggregateInput = {
    id?: SortOrder
    precio_mat_prima?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}