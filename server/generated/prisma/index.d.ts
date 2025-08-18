
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model users_articulos
 * 
 */
export type users_articulos = $Result.DefaultSelection<Prisma.$users_articulosPayload>
/**
 * Model articulo
 * 
 */
export type articulo = $Result.DefaultSelection<Prisma.$articuloPayload>
/**
 * Model articulo_piezas
 * 
 */
export type articulo_piezas = $Result.DefaultSelection<Prisma.$articulo_piezasPayload>
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
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_articulos`: Exposes CRUD operations for the **users_articulos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_articulos
    * const users_articulos = await prisma.users_articulos.findMany()
    * ```
    */
  get users_articulos(): Prisma.users_articulosDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.articulo_piezas`: Exposes CRUD operations for the **articulo_piezas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articulo_piezas
    * const articulo_piezas = await prisma.articulo_piezas.findMany()
    * ```
    */
  get articulo_piezas(): Prisma.articulo_piezasDelegate<ExtArgs, ClientOptions>;

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
    users: 'users',
    users_articulos: 'users_articulos',
    articulo: 'articulo',
    articulo_piezas: 'articulo_piezas',
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
      modelProps: "users" | "users_articulos" | "articulo" | "articulo_piezas" | "pieza"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      users_articulos: {
        payload: Prisma.$users_articulosPayload<ExtArgs>
        fields: Prisma.users_articulosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_articulosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_articulosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>
          }
          findFirst: {
            args: Prisma.users_articulosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_articulosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>
          }
          findMany: {
            args: Prisma.users_articulosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>[]
          }
          create: {
            args: Prisma.users_articulosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>
          }
          createMany: {
            args: Prisma.users_articulosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.users_articulosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>
          }
          update: {
            args: Prisma.users_articulosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>
          }
          deleteMany: {
            args: Prisma.users_articulosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_articulosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.users_articulosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_articulosPayload>
          }
          aggregate: {
            args: Prisma.Users_articulosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_articulos>
          }
          groupBy: {
            args: Prisma.users_articulosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_articulosGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_articulosCountArgs<ExtArgs>
            result: $Utils.Optional<Users_articulosCountAggregateOutputType> | number
          }
        }
      }
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
      articulo_piezas: {
        payload: Prisma.$articulo_piezasPayload<ExtArgs>
        fields: Prisma.articulo_piezasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.articulo_piezasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.articulo_piezasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>
          }
          findFirst: {
            args: Prisma.articulo_piezasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.articulo_piezasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>
          }
          findMany: {
            args: Prisma.articulo_piezasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>[]
          }
          create: {
            args: Prisma.articulo_piezasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>
          }
          createMany: {
            args: Prisma.articulo_piezasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.articulo_piezasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>
          }
          update: {
            args: Prisma.articulo_piezasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>
          }
          deleteMany: {
            args: Prisma.articulo_piezasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.articulo_piezasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.articulo_piezasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>
          }
          aggregate: {
            args: Prisma.Articulo_piezasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticulo_piezas>
          }
          groupBy: {
            args: Prisma.articulo_piezasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Articulo_piezasGroupByOutputType>[]
          }
          count: {
            args: Prisma.articulo_piezasCountArgs<ExtArgs>
            result: $Utils.Optional<Articulo_piezasCountAggregateOutputType> | number
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
    users?: usersOmit
    users_articulos?: users_articulosOmit
    articulo?: articuloOmit
    articulo_piezas?: articulo_piezasOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    users_articulos: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_articulos?: boolean | UsersCountOutputTypeCountUsers_articulosArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsers_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_articulosWhereInput
  }


  /**
   * Count Type ArticuloCountOutputType
   */

  export type ArticuloCountOutputType = {
    users_articulos: number
    articulo_piezas: number
  }

  export type ArticuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_articulos?: boolean | ArticuloCountOutputTypeCountUsers_articulosArgs
    articulo_piezas?: boolean | ArticuloCountOutputTypeCountArticulo_piezasArgs
  }

  // Custom InputTypes
  /**
   * ArticuloCountOutputType without action
   */
  export type ArticuloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticuloCountOutputType
     */
    select?: ArticuloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticuloCountOutputType without action
   */
  export type ArticuloCountOutputTypeCountUsers_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_articulosWhereInput
  }

  /**
   * ArticuloCountOutputType without action
   */
  export type ArticuloCountOutputTypeCountArticulo_piezasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articulo_piezasWhereInput
  }


  /**
   * Count Type PiezaCountOutputType
   */

  export type PiezaCountOutputType = {
    articulo_piezas: number
  }

  export type PiezaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_piezas?: boolean | PiezaCountOutputTypeCountArticulo_piezasArgs
  }

  // Custom InputTypes
  /**
   * PiezaCountOutputType without action
   */
  export type PiezaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiezaCountOutputType
     */
    select?: PiezaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PiezaCountOutputType without action
   */
  export type PiezaCountOutputTypeCountArticulo_piezasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articulo_piezasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    apellido: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    nombre: string | null
    apellido: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    users_articulos?: boolean | users$users_articulosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "apellido", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_articulos?: boolean | users$users_articulosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      users_articulos: Prisma.$users_articulosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nombre: string | null
      apellido: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_articulos<T extends users$users_articulosArgs<ExtArgs> = {}>(args?: Subset<T, users$users_articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly nombre: FieldRef<"users", 'String'>
    readonly apellido: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.users_articulos
   */
  export type users$users_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    where?: users_articulosWhereInput
    orderBy?: users_articulosOrderByWithRelationInput | users_articulosOrderByWithRelationInput[]
    cursor?: users_articulosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_articulosScalarFieldEnum | Users_articulosScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model users_articulos
   */

  export type AggregateUsers_articulos = {
    _count: Users_articulosCountAggregateOutputType | null
    _avg: Users_articulosAvgAggregateOutputType | null
    _sum: Users_articulosSumAggregateOutputType | null
    _min: Users_articulosMinAggregateOutputType | null
    _max: Users_articulosMaxAggregateOutputType | null
  }

  export type Users_articulosAvgAggregateOutputType = {
    user_id: number | null
    articulo_id: number | null
  }

  export type Users_articulosSumAggregateOutputType = {
    user_id: number | null
    articulo_id: number | null
  }

  export type Users_articulosMinAggregateOutputType = {
    user_id: number | null
    articulo_id: number | null
  }

  export type Users_articulosMaxAggregateOutputType = {
    user_id: number | null
    articulo_id: number | null
  }

  export type Users_articulosCountAggregateOutputType = {
    user_id: number
    articulo_id: number
    _all: number
  }


  export type Users_articulosAvgAggregateInputType = {
    user_id?: true
    articulo_id?: true
  }

  export type Users_articulosSumAggregateInputType = {
    user_id?: true
    articulo_id?: true
  }

  export type Users_articulosMinAggregateInputType = {
    user_id?: true
    articulo_id?: true
  }

  export type Users_articulosMaxAggregateInputType = {
    user_id?: true
    articulo_id?: true
  }

  export type Users_articulosCountAggregateInputType = {
    user_id?: true
    articulo_id?: true
    _all?: true
  }

  export type Users_articulosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_articulos to aggregate.
     */
    where?: users_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_articulos to fetch.
     */
    orderBy?: users_articulosOrderByWithRelationInput | users_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_articulos
    **/
    _count?: true | Users_articulosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_articulosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_articulosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_articulosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_articulosMaxAggregateInputType
  }

  export type GetUsers_articulosAggregateType<T extends Users_articulosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_articulos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_articulos[P]>
      : GetScalarType<T[P], AggregateUsers_articulos[P]>
  }




  export type users_articulosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_articulosWhereInput
    orderBy?: users_articulosOrderByWithAggregationInput | users_articulosOrderByWithAggregationInput[]
    by: Users_articulosScalarFieldEnum[] | Users_articulosScalarFieldEnum
    having?: users_articulosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_articulosCountAggregateInputType | true
    _avg?: Users_articulosAvgAggregateInputType
    _sum?: Users_articulosSumAggregateInputType
    _min?: Users_articulosMinAggregateInputType
    _max?: Users_articulosMaxAggregateInputType
  }

  export type Users_articulosGroupByOutputType = {
    user_id: number
    articulo_id: number
    _count: Users_articulosCountAggregateOutputType | null
    _avg: Users_articulosAvgAggregateOutputType | null
    _sum: Users_articulosSumAggregateOutputType | null
    _min: Users_articulosMinAggregateOutputType | null
    _max: Users_articulosMaxAggregateOutputType | null
  }

  type GetUsers_articulosGroupByPayload<T extends users_articulosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_articulosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_articulosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_articulosGroupByOutputType[P]>
            : GetScalarType<T[P], Users_articulosGroupByOutputType[P]>
        }
      >
    >


  export type users_articulosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    articulo_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_articulos"]>



  export type users_articulosSelectScalar = {
    user_id?: boolean
    articulo_id?: boolean
  }

  export type users_articulosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "articulo_id", ExtArgs["result"]["users_articulos"]>
  export type users_articulosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }

  export type $users_articulosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_articulos"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      articulo: Prisma.$articuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      articulo_id: number
    }, ExtArgs["result"]["users_articulos"]>
    composites: {}
  }

  type users_articulosGetPayload<S extends boolean | null | undefined | users_articulosDefaultArgs> = $Result.GetResult<Prisma.$users_articulosPayload, S>

  type users_articulosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_articulosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_articulosCountAggregateInputType | true
    }

  export interface users_articulosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_articulos'], meta: { name: 'users_articulos' } }
    /**
     * Find zero or one Users_articulos that matches the filter.
     * @param {users_articulosFindUniqueArgs} args - Arguments to find a Users_articulos
     * @example
     * // Get one Users_articulos
     * const users_articulos = await prisma.users_articulos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_articulosFindUniqueArgs>(args: SelectSubset<T, users_articulosFindUniqueArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_articulos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_articulosFindUniqueOrThrowArgs} args - Arguments to find a Users_articulos
     * @example
     * // Get one Users_articulos
     * const users_articulos = await prisma.users_articulos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_articulosFindUniqueOrThrowArgs>(args: SelectSubset<T, users_articulosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_articulosFindFirstArgs} args - Arguments to find a Users_articulos
     * @example
     * // Get one Users_articulos
     * const users_articulos = await prisma.users_articulos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_articulosFindFirstArgs>(args?: SelectSubset<T, users_articulosFindFirstArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_articulos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_articulosFindFirstOrThrowArgs} args - Arguments to find a Users_articulos
     * @example
     * // Get one Users_articulos
     * const users_articulos = await prisma.users_articulos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_articulosFindFirstOrThrowArgs>(args?: SelectSubset<T, users_articulosFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_articulosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_articulos
     * const users_articulos = await prisma.users_articulos.findMany()
     * 
     * // Get first 10 Users_articulos
     * const users_articulos = await prisma.users_articulos.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const users_articulosWithUser_idOnly = await prisma.users_articulos.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends users_articulosFindManyArgs>(args?: SelectSubset<T, users_articulosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_articulos.
     * @param {users_articulosCreateArgs} args - Arguments to create a Users_articulos.
     * @example
     * // Create one Users_articulos
     * const Users_articulos = await prisma.users_articulos.create({
     *   data: {
     *     // ... data to create a Users_articulos
     *   }
     * })
     * 
     */
    create<T extends users_articulosCreateArgs>(args: SelectSubset<T, users_articulosCreateArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_articulos.
     * @param {users_articulosCreateManyArgs} args - Arguments to create many Users_articulos.
     * @example
     * // Create many Users_articulos
     * const users_articulos = await prisma.users_articulos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_articulosCreateManyArgs>(args?: SelectSubset<T, users_articulosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users_articulos.
     * @param {users_articulosDeleteArgs} args - Arguments to delete one Users_articulos.
     * @example
     * // Delete one Users_articulos
     * const Users_articulos = await prisma.users_articulos.delete({
     *   where: {
     *     // ... filter to delete one Users_articulos
     *   }
     * })
     * 
     */
    delete<T extends users_articulosDeleteArgs>(args: SelectSubset<T, users_articulosDeleteArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_articulos.
     * @param {users_articulosUpdateArgs} args - Arguments to update one Users_articulos.
     * @example
     * // Update one Users_articulos
     * const users_articulos = await prisma.users_articulos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_articulosUpdateArgs>(args: SelectSubset<T, users_articulosUpdateArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_articulos.
     * @param {users_articulosDeleteManyArgs} args - Arguments to filter Users_articulos to delete.
     * @example
     * // Delete a few Users_articulos
     * const { count } = await prisma.users_articulos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_articulosDeleteManyArgs>(args?: SelectSubset<T, users_articulosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_articulosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_articulos
     * const users_articulos = await prisma.users_articulos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_articulosUpdateManyArgs>(args: SelectSubset<T, users_articulosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users_articulos.
     * @param {users_articulosUpsertArgs} args - Arguments to update or create a Users_articulos.
     * @example
     * // Update or create a Users_articulos
     * const users_articulos = await prisma.users_articulos.upsert({
     *   create: {
     *     // ... data to create a Users_articulos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_articulos we want to update
     *   }
     * })
     */
    upsert<T extends users_articulosUpsertArgs>(args: SelectSubset<T, users_articulosUpsertArgs<ExtArgs>>): Prisma__users_articulosClient<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_articulosCountArgs} args - Arguments to filter Users_articulos to count.
     * @example
     * // Count the number of Users_articulos
     * const count = await prisma.users_articulos.count({
     *   where: {
     *     // ... the filter for the Users_articulos we want to count
     *   }
     * })
    **/
    count<T extends users_articulosCountArgs>(
      args?: Subset<T, users_articulosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_articulosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_articulosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Users_articulosAggregateArgs>(args: Subset<T, Users_articulosAggregateArgs>): Prisma.PrismaPromise<GetUsers_articulosAggregateType<T>>

    /**
     * Group by Users_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_articulosGroupByArgs} args - Group by arguments.
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
      T extends users_articulosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_articulosGroupByArgs['orderBy'] }
        : { orderBy?: users_articulosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, users_articulosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_articulosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_articulos model
   */
  readonly fields: users_articulosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_articulos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_articulosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    articulo<T extends articuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articuloDefaultArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users_articulos model
   */
  interface users_articulosFieldRefs {
    readonly user_id: FieldRef<"users_articulos", 'Int'>
    readonly articulo_id: FieldRef<"users_articulos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users_articulos findUnique
   */
  export type users_articulosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * Filter, which users_articulos to fetch.
     */
    where: users_articulosWhereUniqueInput
  }

  /**
   * users_articulos findUniqueOrThrow
   */
  export type users_articulosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * Filter, which users_articulos to fetch.
     */
    where: users_articulosWhereUniqueInput
  }

  /**
   * users_articulos findFirst
   */
  export type users_articulosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * Filter, which users_articulos to fetch.
     */
    where?: users_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_articulos to fetch.
     */
    orderBy?: users_articulosOrderByWithRelationInput | users_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_articulos.
     */
    cursor?: users_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_articulos.
     */
    distinct?: Users_articulosScalarFieldEnum | Users_articulosScalarFieldEnum[]
  }

  /**
   * users_articulos findFirstOrThrow
   */
  export type users_articulosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * Filter, which users_articulos to fetch.
     */
    where?: users_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_articulos to fetch.
     */
    orderBy?: users_articulosOrderByWithRelationInput | users_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_articulos.
     */
    cursor?: users_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_articulos.
     */
    distinct?: Users_articulosScalarFieldEnum | Users_articulosScalarFieldEnum[]
  }

  /**
   * users_articulos findMany
   */
  export type users_articulosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * Filter, which users_articulos to fetch.
     */
    where?: users_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_articulos to fetch.
     */
    orderBy?: users_articulosOrderByWithRelationInput | users_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_articulos.
     */
    cursor?: users_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_articulos.
     */
    skip?: number
    distinct?: Users_articulosScalarFieldEnum | Users_articulosScalarFieldEnum[]
  }

  /**
   * users_articulos create
   */
  export type users_articulosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * The data needed to create a users_articulos.
     */
    data: XOR<users_articulosCreateInput, users_articulosUncheckedCreateInput>
  }

  /**
   * users_articulos createMany
   */
  export type users_articulosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_articulos.
     */
    data: users_articulosCreateManyInput | users_articulosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_articulos update
   */
  export type users_articulosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * The data needed to update a users_articulos.
     */
    data: XOR<users_articulosUpdateInput, users_articulosUncheckedUpdateInput>
    /**
     * Choose, which users_articulos to update.
     */
    where: users_articulosWhereUniqueInput
  }

  /**
   * users_articulos updateMany
   */
  export type users_articulosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_articulos.
     */
    data: XOR<users_articulosUpdateManyMutationInput, users_articulosUncheckedUpdateManyInput>
    /**
     * Filter which users_articulos to update
     */
    where?: users_articulosWhereInput
    /**
     * Limit how many users_articulos to update.
     */
    limit?: number
  }

  /**
   * users_articulos upsert
   */
  export type users_articulosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * The filter to search for the users_articulos to update in case it exists.
     */
    where: users_articulosWhereUniqueInput
    /**
     * In case the users_articulos found by the `where` argument doesn't exist, create a new users_articulos with this data.
     */
    create: XOR<users_articulosCreateInput, users_articulosUncheckedCreateInput>
    /**
     * In case the users_articulos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_articulosUpdateInput, users_articulosUncheckedUpdateInput>
  }

  /**
   * users_articulos delete
   */
  export type users_articulosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    /**
     * Filter which users_articulos to delete.
     */
    where: users_articulosWhereUniqueInput
  }

  /**
   * users_articulos deleteMany
   */
  export type users_articulosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_articulos to delete
     */
    where?: users_articulosWhereInput
    /**
     * Limit how many users_articulos to delete.
     */
    limit?: number
  }

  /**
   * users_articulos without action
   */
  export type users_articulosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
  }


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
    codigo: number | null
    cant_piezas: number | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloSumAggregateOutputType = {
    id: number | null
    codigo: number | null
    cant_piezas: number | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloMinAggregateOutputType = {
    id: number | null
    codigo: number | null
    descripcion: string | null
    cant_piezas: number | null
    plano: string | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloMaxAggregateOutputType = {
    id: number | null
    codigo: number | null
    descripcion: string | null
    cant_piezas: number | null
    plano: string | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    cant_piezas: number
    plano: number
    precio: number
    cte_ganancia: number
    _all: number
  }


  export type ArticuloAvgAggregateInputType = {
    id?: true
    codigo?: true
    cant_piezas?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloSumAggregateInputType = {
    id?: true
    codigo?: true
    cant_piezas?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    cant_piezas?: true
    plano?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    cant_piezas?: true
    plano?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
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
    codigo: number | null
    descripcion: string | null
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
    codigo?: boolean
    descripcion?: boolean
    cant_piezas?: boolean
    plano?: boolean
    precio?: boolean
    cte_ganancia?: boolean
    users_articulos?: boolean | articulo$users_articulosArgs<ExtArgs>
    articulo_piezas?: boolean | articulo$articulo_piezasArgs<ExtArgs>
    _count?: boolean | ArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo"]>



  export type articuloSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cant_piezas?: boolean
    plano?: boolean
    precio?: boolean
    cte_ganancia?: boolean
  }

  export type articuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "cant_piezas" | "plano" | "precio" | "cte_ganancia", ExtArgs["result"]["articulo"]>
  export type articuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_articulos?: boolean | articulo$users_articulosArgs<ExtArgs>
    articulo_piezas?: boolean | articulo$articulo_piezasArgs<ExtArgs>
    _count?: boolean | ArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $articuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articulo"
    objects: {
      users_articulos: Prisma.$users_articulosPayload<ExtArgs>[]
      articulo_piezas: Prisma.$articulo_piezasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: number | null
      descripcion: string | null
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
    users_articulos<T extends articulo$users_articulosArgs<ExtArgs> = {}>(args?: Subset<T, articulo$users_articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_articulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    articulo_piezas<T extends articulo$articulo_piezasArgs<ExtArgs> = {}>(args?: Subset<T, articulo$articulo_piezasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly codigo: FieldRef<"articulo", 'Int'>
    readonly descripcion: FieldRef<"articulo", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
    /**
     * The data needed to create a articulo.
     */
    data?: XOR<articuloCreateInput, articuloUncheckedCreateInput>
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
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
   * articulo.users_articulos
   */
  export type articulo$users_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_articulos
     */
    select?: users_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_articulos
     */
    omit?: users_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_articulosInclude<ExtArgs> | null
    where?: users_articulosWhereInput
    orderBy?: users_articulosOrderByWithRelationInput | users_articulosOrderByWithRelationInput[]
    cursor?: users_articulosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_articulosScalarFieldEnum | Users_articulosScalarFieldEnum[]
  }

  /**
   * articulo.articulo_piezas
   */
  export type articulo$articulo_piezasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    where?: articulo_piezasWhereInput
    orderBy?: articulo_piezasOrderByWithRelationInput | articulo_piezasOrderByWithRelationInput[]
    cursor?: articulo_piezasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Articulo_piezasScalarFieldEnum | Articulo_piezasScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articuloInclude<ExtArgs> | null
  }


  /**
   * Model articulo_piezas
   */

  export type AggregateArticulo_piezas = {
    _count: Articulo_piezasCountAggregateOutputType | null
    _avg: Articulo_piezasAvgAggregateOutputType | null
    _sum: Articulo_piezasSumAggregateOutputType | null
    _min: Articulo_piezasMinAggregateOutputType | null
    _max: Articulo_piezasMaxAggregateOutputType | null
  }

  export type Articulo_piezasAvgAggregateOutputType = {
    articulo_id: number | null
    pieza_id: number | null
  }

  export type Articulo_piezasSumAggregateOutputType = {
    articulo_id: number | null
    pieza_id: number | null
  }

  export type Articulo_piezasMinAggregateOutputType = {
    articulo_id: number | null
    pieza_id: number | null
  }

  export type Articulo_piezasMaxAggregateOutputType = {
    articulo_id: number | null
    pieza_id: number | null
  }

  export type Articulo_piezasCountAggregateOutputType = {
    articulo_id: number
    pieza_id: number
    _all: number
  }


  export type Articulo_piezasAvgAggregateInputType = {
    articulo_id?: true
    pieza_id?: true
  }

  export type Articulo_piezasSumAggregateInputType = {
    articulo_id?: true
    pieza_id?: true
  }

  export type Articulo_piezasMinAggregateInputType = {
    articulo_id?: true
    pieza_id?: true
  }

  export type Articulo_piezasMaxAggregateInputType = {
    articulo_id?: true
    pieza_id?: true
  }

  export type Articulo_piezasCountAggregateInputType = {
    articulo_id?: true
    pieza_id?: true
    _all?: true
  }

  export type Articulo_piezasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articulo_piezas to aggregate.
     */
    where?: articulo_piezasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_piezas to fetch.
     */
    orderBy?: articulo_piezasOrderByWithRelationInput | articulo_piezasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articulo_piezasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_piezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articulo_piezas
    **/
    _count?: true | Articulo_piezasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Articulo_piezasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Articulo_piezasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Articulo_piezasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Articulo_piezasMaxAggregateInputType
  }

  export type GetArticulo_piezasAggregateType<T extends Articulo_piezasAggregateArgs> = {
        [P in keyof T & keyof AggregateArticulo_piezas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticulo_piezas[P]>
      : GetScalarType<T[P], AggregateArticulo_piezas[P]>
  }




  export type articulo_piezasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: articulo_piezasWhereInput
    orderBy?: articulo_piezasOrderByWithAggregationInput | articulo_piezasOrderByWithAggregationInput[]
    by: Articulo_piezasScalarFieldEnum[] | Articulo_piezasScalarFieldEnum
    having?: articulo_piezasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Articulo_piezasCountAggregateInputType | true
    _avg?: Articulo_piezasAvgAggregateInputType
    _sum?: Articulo_piezasSumAggregateInputType
    _min?: Articulo_piezasMinAggregateInputType
    _max?: Articulo_piezasMaxAggregateInputType
  }

  export type Articulo_piezasGroupByOutputType = {
    articulo_id: number
    pieza_id: number
    _count: Articulo_piezasCountAggregateOutputType | null
    _avg: Articulo_piezasAvgAggregateOutputType | null
    _sum: Articulo_piezasSumAggregateOutputType | null
    _min: Articulo_piezasMinAggregateOutputType | null
    _max: Articulo_piezasMaxAggregateOutputType | null
  }

  type GetArticulo_piezasGroupByPayload<T extends articulo_piezasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Articulo_piezasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Articulo_piezasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Articulo_piezasGroupByOutputType[P]>
            : GetScalarType<T[P], Articulo_piezasGroupByOutputType[P]>
        }
      >
    >


  export type articulo_piezasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articulo_id?: boolean
    pieza_id?: boolean
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
    pieza?: boolean | piezaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo_piezas"]>



  export type articulo_piezasSelectScalar = {
    articulo_id?: boolean
    pieza_id?: boolean
  }

  export type articulo_piezasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"articulo_id" | "pieza_id", ExtArgs["result"]["articulo_piezas"]>
  export type articulo_piezasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
    pieza?: boolean | piezaDefaultArgs<ExtArgs>
  }

  export type $articulo_piezasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articulo_piezas"
    objects: {
      articulo: Prisma.$articuloPayload<ExtArgs>
      pieza: Prisma.$piezaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      articulo_id: number
      pieza_id: number
    }, ExtArgs["result"]["articulo_piezas"]>
    composites: {}
  }

  type articulo_piezasGetPayload<S extends boolean | null | undefined | articulo_piezasDefaultArgs> = $Result.GetResult<Prisma.$articulo_piezasPayload, S>

  type articulo_piezasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<articulo_piezasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Articulo_piezasCountAggregateInputType | true
    }

  export interface articulo_piezasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['articulo_piezas'], meta: { name: 'articulo_piezas' } }
    /**
     * Find zero or one Articulo_piezas that matches the filter.
     * @param {articulo_piezasFindUniqueArgs} args - Arguments to find a Articulo_piezas
     * @example
     * // Get one Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends articulo_piezasFindUniqueArgs>(args: SelectSubset<T, articulo_piezasFindUniqueArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articulo_piezas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {articulo_piezasFindUniqueOrThrowArgs} args - Arguments to find a Articulo_piezas
     * @example
     * // Get one Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends articulo_piezasFindUniqueOrThrowArgs>(args: SelectSubset<T, articulo_piezasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo_piezas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_piezasFindFirstArgs} args - Arguments to find a Articulo_piezas
     * @example
     * // Get one Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends articulo_piezasFindFirstArgs>(args?: SelectSubset<T, articulo_piezasFindFirstArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articulo_piezas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_piezasFindFirstOrThrowArgs} args - Arguments to find a Articulo_piezas
     * @example
     * // Get one Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends articulo_piezasFindFirstOrThrowArgs>(args?: SelectSubset<T, articulo_piezasFindFirstOrThrowArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articulo_piezas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_piezasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.findMany()
     * 
     * // Get first 10 Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.findMany({ take: 10 })
     * 
     * // Only select the `articulo_id`
     * const articulo_piezasWithArticulo_idOnly = await prisma.articulo_piezas.findMany({ select: { articulo_id: true } })
     * 
     */
    findMany<T extends articulo_piezasFindManyArgs>(args?: SelectSubset<T, articulo_piezasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articulo_piezas.
     * @param {articulo_piezasCreateArgs} args - Arguments to create a Articulo_piezas.
     * @example
     * // Create one Articulo_piezas
     * const Articulo_piezas = await prisma.articulo_piezas.create({
     *   data: {
     *     // ... data to create a Articulo_piezas
     *   }
     * })
     * 
     */
    create<T extends articulo_piezasCreateArgs>(args: SelectSubset<T, articulo_piezasCreateArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articulo_piezas.
     * @param {articulo_piezasCreateManyArgs} args - Arguments to create many Articulo_piezas.
     * @example
     * // Create many Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends articulo_piezasCreateManyArgs>(args?: SelectSubset<T, articulo_piezasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articulo_piezas.
     * @param {articulo_piezasDeleteArgs} args - Arguments to delete one Articulo_piezas.
     * @example
     * // Delete one Articulo_piezas
     * const Articulo_piezas = await prisma.articulo_piezas.delete({
     *   where: {
     *     // ... filter to delete one Articulo_piezas
     *   }
     * })
     * 
     */
    delete<T extends articulo_piezasDeleteArgs>(args: SelectSubset<T, articulo_piezasDeleteArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articulo_piezas.
     * @param {articulo_piezasUpdateArgs} args - Arguments to update one Articulo_piezas.
     * @example
     * // Update one Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends articulo_piezasUpdateArgs>(args: SelectSubset<T, articulo_piezasUpdateArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articulo_piezas.
     * @param {articulo_piezasDeleteManyArgs} args - Arguments to filter Articulo_piezas to delete.
     * @example
     * // Delete a few Articulo_piezas
     * const { count } = await prisma.articulo_piezas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends articulo_piezasDeleteManyArgs>(args?: SelectSubset<T, articulo_piezasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articulo_piezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_piezasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends articulo_piezasUpdateManyArgs>(args: SelectSubset<T, articulo_piezasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articulo_piezas.
     * @param {articulo_piezasUpsertArgs} args - Arguments to update or create a Articulo_piezas.
     * @example
     * // Update or create a Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.upsert({
     *   create: {
     *     // ... data to create a Articulo_piezas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articulo_piezas we want to update
     *   }
     * })
     */
    upsert<T extends articulo_piezasUpsertArgs>(args: SelectSubset<T, articulo_piezasUpsertArgs<ExtArgs>>): Prisma__articulo_piezasClient<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articulo_piezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_piezasCountArgs} args - Arguments to filter Articulo_piezas to count.
     * @example
     * // Count the number of Articulo_piezas
     * const count = await prisma.articulo_piezas.count({
     *   where: {
     *     // ... the filter for the Articulo_piezas we want to count
     *   }
     * })
    **/
    count<T extends articulo_piezasCountArgs>(
      args?: Subset<T, articulo_piezasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Articulo_piezasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articulo_piezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Articulo_piezasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Articulo_piezasAggregateArgs>(args: Subset<T, Articulo_piezasAggregateArgs>): Prisma.PrismaPromise<GetArticulo_piezasAggregateType<T>>

    /**
     * Group by Articulo_piezas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articulo_piezasGroupByArgs} args - Group by arguments.
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
      T extends articulo_piezasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: articulo_piezasGroupByArgs['orderBy'] }
        : { orderBy?: articulo_piezasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, articulo_piezasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticulo_piezasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the articulo_piezas model
   */
  readonly fields: articulo_piezasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for articulo_piezas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__articulo_piezasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articulo<T extends articuloDefaultArgs<ExtArgs> = {}>(args?: Subset<T, articuloDefaultArgs<ExtArgs>>): Prisma__articuloClient<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pieza<T extends piezaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, piezaDefaultArgs<ExtArgs>>): Prisma__piezaClient<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the articulo_piezas model
   */
  interface articulo_piezasFieldRefs {
    readonly articulo_id: FieldRef<"articulo_piezas", 'Int'>
    readonly pieza_id: FieldRef<"articulo_piezas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * articulo_piezas findUnique
   */
  export type articulo_piezasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * Filter, which articulo_piezas to fetch.
     */
    where: articulo_piezasWhereUniqueInput
  }

  /**
   * articulo_piezas findUniqueOrThrow
   */
  export type articulo_piezasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * Filter, which articulo_piezas to fetch.
     */
    where: articulo_piezasWhereUniqueInput
  }

  /**
   * articulo_piezas findFirst
   */
  export type articulo_piezasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * Filter, which articulo_piezas to fetch.
     */
    where?: articulo_piezasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_piezas to fetch.
     */
    orderBy?: articulo_piezasOrderByWithRelationInput | articulo_piezasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articulo_piezas.
     */
    cursor?: articulo_piezasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_piezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articulo_piezas.
     */
    distinct?: Articulo_piezasScalarFieldEnum | Articulo_piezasScalarFieldEnum[]
  }

  /**
   * articulo_piezas findFirstOrThrow
   */
  export type articulo_piezasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * Filter, which articulo_piezas to fetch.
     */
    where?: articulo_piezasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_piezas to fetch.
     */
    orderBy?: articulo_piezasOrderByWithRelationInput | articulo_piezasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articulo_piezas.
     */
    cursor?: articulo_piezasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_piezas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articulo_piezas.
     */
    distinct?: Articulo_piezasScalarFieldEnum | Articulo_piezasScalarFieldEnum[]
  }

  /**
   * articulo_piezas findMany
   */
  export type articulo_piezasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * Filter, which articulo_piezas to fetch.
     */
    where?: articulo_piezasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articulo_piezas to fetch.
     */
    orderBy?: articulo_piezasOrderByWithRelationInput | articulo_piezasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articulo_piezas.
     */
    cursor?: articulo_piezasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articulo_piezas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articulo_piezas.
     */
    skip?: number
    distinct?: Articulo_piezasScalarFieldEnum | Articulo_piezasScalarFieldEnum[]
  }

  /**
   * articulo_piezas create
   */
  export type articulo_piezasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * The data needed to create a articulo_piezas.
     */
    data: XOR<articulo_piezasCreateInput, articulo_piezasUncheckedCreateInput>
  }

  /**
   * articulo_piezas createMany
   */
  export type articulo_piezasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many articulo_piezas.
     */
    data: articulo_piezasCreateManyInput | articulo_piezasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * articulo_piezas update
   */
  export type articulo_piezasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * The data needed to update a articulo_piezas.
     */
    data: XOR<articulo_piezasUpdateInput, articulo_piezasUncheckedUpdateInput>
    /**
     * Choose, which articulo_piezas to update.
     */
    where: articulo_piezasWhereUniqueInput
  }

  /**
   * articulo_piezas updateMany
   */
  export type articulo_piezasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update articulo_piezas.
     */
    data: XOR<articulo_piezasUpdateManyMutationInput, articulo_piezasUncheckedUpdateManyInput>
    /**
     * Filter which articulo_piezas to update
     */
    where?: articulo_piezasWhereInput
    /**
     * Limit how many articulo_piezas to update.
     */
    limit?: number
  }

  /**
   * articulo_piezas upsert
   */
  export type articulo_piezasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * The filter to search for the articulo_piezas to update in case it exists.
     */
    where: articulo_piezasWhereUniqueInput
    /**
     * In case the articulo_piezas found by the `where` argument doesn't exist, create a new articulo_piezas with this data.
     */
    create: XOR<articulo_piezasCreateInput, articulo_piezasUncheckedCreateInput>
    /**
     * In case the articulo_piezas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articulo_piezasUpdateInput, articulo_piezasUncheckedUpdateInput>
  }

  /**
   * articulo_piezas delete
   */
  export type articulo_piezasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    /**
     * Filter which articulo_piezas to delete.
     */
    where: articulo_piezasWhereUniqueInput
  }

  /**
   * articulo_piezas deleteMany
   */
  export type articulo_piezasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which articulo_piezas to delete
     */
    where?: articulo_piezasWhereInput
    /**
     * Limit how many articulo_piezas to delete.
     */
    limit?: number
  }

  /**
   * articulo_piezas without action
   */
  export type articulo_piezasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
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
    articulo_piezas?: boolean | pieza$articulo_piezasArgs<ExtArgs>
    _count?: boolean | PiezaCountOutputTypeDefaultArgs<ExtArgs>
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
  export type piezaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_piezas?: boolean | pieza$articulo_piezasArgs<ExtArgs>
    _count?: boolean | PiezaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $piezaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pieza"
    objects: {
      articulo_piezas: Prisma.$articulo_piezasPayload<ExtArgs>[]
    }
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
    articulo_piezas<T extends pieza$articulo_piezasArgs<ExtArgs> = {}>(args?: Subset<T, pieza$articulo_piezasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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
   * pieza.articulo_piezas
   */
  export type pieza$articulo_piezasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasInclude<ExtArgs> | null
    where?: articulo_piezasWhereInput
    orderBy?: articulo_piezasOrderByWithRelationInput | articulo_piezasOrderByWithRelationInput[]
    cursor?: articulo_piezasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Articulo_piezasScalarFieldEnum | Articulo_piezasScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: piezaInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    apellido: 'apellido'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Users_articulosScalarFieldEnum: {
    user_id: 'user_id',
    articulo_id: 'articulo_id'
  };

  export type Users_articulosScalarFieldEnum = (typeof Users_articulosScalarFieldEnum)[keyof typeof Users_articulosScalarFieldEnum]


  export const ArticuloScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    cant_piezas: 'cant_piezas',
    plano: 'plano',
    precio: 'precio',
    cte_ganancia: 'cte_ganancia'
  };

  export type ArticuloScalarFieldEnum = (typeof ArticuloScalarFieldEnum)[keyof typeof ArticuloScalarFieldEnum]


  export const Articulo_piezasScalarFieldEnum: {
    articulo_id: 'articulo_id',
    pieza_id: 'pieza_id'
  };

  export type Articulo_piezasScalarFieldEnum = (typeof Articulo_piezasScalarFieldEnum)[keyof typeof Articulo_piezasScalarFieldEnum]


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


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    nombre: 'nombre',
    apellido: 'apellido'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const articuloOrderByRelevanceFieldEnum: {
    descripcion: 'descripcion',
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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    nombre?: StringNullableFilter<"users"> | string | null
    apellido?: StringNullableFilter<"users"> | string | null
    users_articulos?: Users_articulosListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    users_articulos?: users_articulosOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    nombre?: StringNullableFilter<"users"> | string | null
    apellido?: StringNullableFilter<"users"> | string | null
    users_articulos?: Users_articulosListRelationFilter
  }, "id" | "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    nombre?: StringNullableWithAggregatesFilter<"users"> | string | null
    apellido?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type users_articulosWhereInput = {
    AND?: users_articulosWhereInput | users_articulosWhereInput[]
    OR?: users_articulosWhereInput[]
    NOT?: users_articulosWhereInput | users_articulosWhereInput[]
    user_id?: IntFilter<"users_articulos"> | number
    articulo_id?: IntFilter<"users_articulos"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    articulo?: XOR<ArticuloScalarRelationFilter, articuloWhereInput>
  }

  export type users_articulosOrderByWithRelationInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
    users?: usersOrderByWithRelationInput
    articulo?: articuloOrderByWithRelationInput
  }

  export type users_articulosWhereUniqueInput = Prisma.AtLeast<{
    user_id_articulo_id?: users_articulosUser_idArticulo_idCompoundUniqueInput
    AND?: users_articulosWhereInput | users_articulosWhereInput[]
    OR?: users_articulosWhereInput[]
    NOT?: users_articulosWhereInput | users_articulosWhereInput[]
    user_id?: IntFilter<"users_articulos"> | number
    articulo_id?: IntFilter<"users_articulos"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    articulo?: XOR<ArticuloScalarRelationFilter, articuloWhereInput>
  }, "user_id_articulo_id">

  export type users_articulosOrderByWithAggregationInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
    _count?: users_articulosCountOrderByAggregateInput
    _avg?: users_articulosAvgOrderByAggregateInput
    _max?: users_articulosMaxOrderByAggregateInput
    _min?: users_articulosMinOrderByAggregateInput
    _sum?: users_articulosSumOrderByAggregateInput
  }

  export type users_articulosScalarWhereWithAggregatesInput = {
    AND?: users_articulosScalarWhereWithAggregatesInput | users_articulosScalarWhereWithAggregatesInput[]
    OR?: users_articulosScalarWhereWithAggregatesInput[]
    NOT?: users_articulosScalarWhereWithAggregatesInput | users_articulosScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users_articulos"> | number
    articulo_id?: IntWithAggregatesFilter<"users_articulos"> | number
  }

  export type articuloWhereInput = {
    AND?: articuloWhereInput | articuloWhereInput[]
    OR?: articuloWhereInput[]
    NOT?: articuloWhereInput | articuloWhereInput[]
    id?: IntFilter<"articulo"> | number
    codigo?: IntNullableFilter<"articulo"> | number | null
    descripcion?: StringNullableFilter<"articulo"> | string | null
    cant_piezas?: IntNullableFilter<"articulo"> | number | null
    plano?: StringNullableFilter<"articulo"> | string | null
    precio?: IntNullableFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableFilter<"articulo"> | number | null
    users_articulos?: Users_articulosListRelationFilter
    articulo_piezas?: Articulo_piezasListRelationFilter
  }

  export type articuloOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    cant_piezas?: SortOrderInput | SortOrder
    plano?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    users_articulos?: users_articulosOrderByRelationAggregateInput
    articulo_piezas?: articulo_piezasOrderByRelationAggregateInput
    _relevance?: articuloOrderByRelevanceInput
  }

  export type articuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articuloWhereInput | articuloWhereInput[]
    OR?: articuloWhereInput[]
    NOT?: articuloWhereInput | articuloWhereInput[]
    codigo?: IntNullableFilter<"articulo"> | number | null
    descripcion?: StringNullableFilter<"articulo"> | string | null
    cant_piezas?: IntNullableFilter<"articulo"> | number | null
    plano?: StringNullableFilter<"articulo"> | string | null
    precio?: IntNullableFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableFilter<"articulo"> | number | null
    users_articulos?: Users_articulosListRelationFilter
    articulo_piezas?: Articulo_piezasListRelationFilter
  }, "id" | "id">

  export type articuloOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
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
    codigo?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    descripcion?: StringNullableWithAggregatesFilter<"articulo"> | string | null
    cant_piezas?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    plano?: StringNullableWithAggregatesFilter<"articulo"> | string | null
    precio?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableWithAggregatesFilter<"articulo"> | number | null
  }

  export type articulo_piezasWhereInput = {
    AND?: articulo_piezasWhereInput | articulo_piezasWhereInput[]
    OR?: articulo_piezasWhereInput[]
    NOT?: articulo_piezasWhereInput | articulo_piezasWhereInput[]
    articulo_id?: IntFilter<"articulo_piezas"> | number
    pieza_id?: IntFilter<"articulo_piezas"> | number
    articulo?: XOR<ArticuloScalarRelationFilter, articuloWhereInput>
    pieza?: XOR<PiezaScalarRelationFilter, piezaWhereInput>
  }

  export type articulo_piezasOrderByWithRelationInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
    articulo?: articuloOrderByWithRelationInput
    pieza?: piezaOrderByWithRelationInput
  }

  export type articulo_piezasWhereUniqueInput = Prisma.AtLeast<{
    articulo_id_pieza_id?: articulo_piezasArticulo_idPieza_idCompoundUniqueInput
    AND?: articulo_piezasWhereInput | articulo_piezasWhereInput[]
    OR?: articulo_piezasWhereInput[]
    NOT?: articulo_piezasWhereInput | articulo_piezasWhereInput[]
    articulo_id?: IntFilter<"articulo_piezas"> | number
    pieza_id?: IntFilter<"articulo_piezas"> | number
    articulo?: XOR<ArticuloScalarRelationFilter, articuloWhereInput>
    pieza?: XOR<PiezaScalarRelationFilter, piezaWhereInput>
  }, "articulo_id_pieza_id">

  export type articulo_piezasOrderByWithAggregationInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
    _count?: articulo_piezasCountOrderByAggregateInput
    _avg?: articulo_piezasAvgOrderByAggregateInput
    _max?: articulo_piezasMaxOrderByAggregateInput
    _min?: articulo_piezasMinOrderByAggregateInput
    _sum?: articulo_piezasSumOrderByAggregateInput
  }

  export type articulo_piezasScalarWhereWithAggregatesInput = {
    AND?: articulo_piezasScalarWhereWithAggregatesInput | articulo_piezasScalarWhereWithAggregatesInput[]
    OR?: articulo_piezasScalarWhereWithAggregatesInput[]
    NOT?: articulo_piezasScalarWhereWithAggregatesInput | articulo_piezasScalarWhereWithAggregatesInput[]
    articulo_id?: IntWithAggregatesFilter<"articulo_piezas"> | number
    pieza_id?: IntWithAggregatesFilter<"articulo_piezas"> | number
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
    articulo_piezas?: Articulo_piezasListRelationFilter
  }

  export type piezaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio_mat_prima?: SortOrderInput | SortOrder
    plano_pleg_DWG?: SortOrderInput | SortOrder
    plano_pleg_SOLID?: SortOrderInput | SortOrder
    plano_laser_DXF?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    articulo_piezas?: articulo_piezasOrderByRelationAggregateInput
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
    articulo_piezas?: Articulo_piezasListRelationFilter
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

  export type usersCreateInput = {
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    users_articulos?: users_articulosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    users_articulos?: users_articulosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    users_articulos?: users_articulosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    users_articulos?: users_articulosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type users_articulosCreateInput = {
    users: usersCreateNestedOneWithoutUsers_articulosInput
    articulo: articuloCreateNestedOneWithoutUsers_articulosInput
  }

  export type users_articulosUncheckedCreateInput = {
    user_id: number
    articulo_id: number
  }

  export type users_articulosUpdateInput = {
    users?: usersUpdateOneRequiredWithoutUsers_articulosNestedInput
    articulo?: articuloUpdateOneRequiredWithoutUsers_articulosNestedInput
  }

  export type users_articulosUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    articulo_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_articulosCreateManyInput = {
    user_id: number
    articulo_id: number
  }

  export type users_articulosUpdateManyMutationInput = {

  }

  export type users_articulosUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    articulo_id?: IntFieldUpdateOperationsInput | number
  }

  export type articuloCreateInput = {
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    users_articulos?: users_articulosCreateNestedManyWithoutArticuloInput
    articulo_piezas?: articulo_piezasCreateNestedManyWithoutArticuloInput
  }

  export type articuloUncheckedCreateInput = {
    id?: number
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    users_articulos?: users_articulosUncheckedCreateNestedManyWithoutArticuloInput
    articulo_piezas?: articulo_piezasUncheckedCreateNestedManyWithoutArticuloInput
  }

  export type articuloUpdateInput = {
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    users_articulos?: users_articulosUpdateManyWithoutArticuloNestedInput
    articulo_piezas?: articulo_piezasUpdateManyWithoutArticuloNestedInput
  }

  export type articuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    users_articulos?: users_articulosUncheckedUpdateManyWithoutArticuloNestedInput
    articulo_piezas?: articulo_piezasUncheckedUpdateManyWithoutArticuloNestedInput
  }

  export type articuloCreateManyInput = {
    id?: number
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
  }

  export type articuloUpdateManyMutationInput = {
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articulo_piezasCreateInput = {
    articulo: articuloCreateNestedOneWithoutArticulo_piezasInput
    pieza: piezaCreateNestedOneWithoutArticulo_piezasInput
  }

  export type articulo_piezasUncheckedCreateInput = {
    articulo_id: number
    pieza_id: number
  }

  export type articulo_piezasUpdateInput = {
    articulo?: articuloUpdateOneRequiredWithoutArticulo_piezasNestedInput
    pieza?: piezaUpdateOneRequiredWithoutArticulo_piezasNestedInput
  }

  export type articulo_piezasUncheckedUpdateInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
    pieza_id?: IntFieldUpdateOperationsInput | number
  }

  export type articulo_piezasCreateManyInput = {
    articulo_id: number
    pieza_id: number
  }

  export type articulo_piezasUpdateManyMutationInput = {

  }

  export type articulo_piezasUncheckedUpdateManyInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
    pieza_id?: IntFieldUpdateOperationsInput | number
  }

  export type piezaCreateInput = {
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasCreateNestedManyWithoutPiezaInput
  }

  export type piezaUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasUncheckedCreateNestedManyWithoutPiezaInput
  }

  export type piezaUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUpdateManyWithoutPiezaNestedInput
  }

  export type piezaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUncheckedUpdateManyWithoutPiezaNestedInput
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

  export type Users_articulosListRelationFilter = {
    every?: users_articulosWhereInput
    some?: users_articulosWhereInput
    none?: users_articulosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type users_articulosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type ArticuloScalarRelationFilter = {
    is?: articuloWhereInput
    isNot?: articuloWhereInput
  }

  export type users_articulosUser_idArticulo_idCompoundUniqueInput = {
    user_id: number
    articulo_id: number
  }

  export type users_articulosCountOrderByAggregateInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
  }

  export type users_articulosAvgOrderByAggregateInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
  }

  export type users_articulosMaxOrderByAggregateInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
  }

  export type users_articulosMinOrderByAggregateInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
  }

  export type users_articulosSumOrderByAggregateInput = {
    user_id?: SortOrder
    articulo_id?: SortOrder
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

  export type Articulo_piezasListRelationFilter = {
    every?: articulo_piezasWhereInput
    some?: articulo_piezasWhereInput
    none?: articulo_piezasWhereInput
  }

  export type articulo_piezasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articuloOrderByRelevanceInput = {
    fields: articuloOrderByRelevanceFieldEnum | articuloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type articuloCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cant_piezas?: SortOrder
    plano?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloAvgOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    cant_piezas?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cant_piezas?: SortOrder
    plano?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cant_piezas?: SortOrder
    plano?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloSumOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    cant_piezas?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
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

  export type PiezaScalarRelationFilter = {
    is?: piezaWhereInput
    isNot?: piezaWhereInput
  }

  export type articulo_piezasArticulo_idPieza_idCompoundUniqueInput = {
    articulo_id: number
    pieza_id: number
  }

  export type articulo_piezasCountOrderByAggregateInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
  }

  export type articulo_piezasAvgOrderByAggregateInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
  }

  export type articulo_piezasMaxOrderByAggregateInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
  }

  export type articulo_piezasMinOrderByAggregateInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
  }

  export type articulo_piezasSumOrderByAggregateInput = {
    articulo_id?: SortOrder
    pieza_id?: SortOrder
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

  export type users_articulosCreateNestedManyWithoutUsersInput = {
    create?: XOR<users_articulosCreateWithoutUsersInput, users_articulosUncheckedCreateWithoutUsersInput> | users_articulosCreateWithoutUsersInput[] | users_articulosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutUsersInput | users_articulosCreateOrConnectWithoutUsersInput[]
    createMany?: users_articulosCreateManyUsersInputEnvelope
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
  }

  export type users_articulosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<users_articulosCreateWithoutUsersInput, users_articulosUncheckedCreateWithoutUsersInput> | users_articulosCreateWithoutUsersInput[] | users_articulosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutUsersInput | users_articulosCreateOrConnectWithoutUsersInput[]
    createMany?: users_articulosCreateManyUsersInputEnvelope
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type users_articulosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<users_articulosCreateWithoutUsersInput, users_articulosUncheckedCreateWithoutUsersInput> | users_articulosCreateWithoutUsersInput[] | users_articulosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutUsersInput | users_articulosCreateOrConnectWithoutUsersInput[]
    upsert?: users_articulosUpsertWithWhereUniqueWithoutUsersInput | users_articulosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: users_articulosCreateManyUsersInputEnvelope
    set?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    disconnect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    delete?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    update?: users_articulosUpdateWithWhereUniqueWithoutUsersInput | users_articulosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: users_articulosUpdateManyWithWhereWithoutUsersInput | users_articulosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: users_articulosScalarWhereInput | users_articulosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type users_articulosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<users_articulosCreateWithoutUsersInput, users_articulosUncheckedCreateWithoutUsersInput> | users_articulosCreateWithoutUsersInput[] | users_articulosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutUsersInput | users_articulosCreateOrConnectWithoutUsersInput[]
    upsert?: users_articulosUpsertWithWhereUniqueWithoutUsersInput | users_articulosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: users_articulosCreateManyUsersInputEnvelope
    set?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    disconnect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    delete?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    update?: users_articulosUpdateWithWhereUniqueWithoutUsersInput | users_articulosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: users_articulosUpdateManyWithWhereWithoutUsersInput | users_articulosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: users_articulosScalarWhereInput | users_articulosScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUsers_articulosInput = {
    create?: XOR<usersCreateWithoutUsers_articulosInput, usersUncheckedCreateWithoutUsers_articulosInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_articulosInput
    connect?: usersWhereUniqueInput
  }

  export type articuloCreateNestedOneWithoutUsers_articulosInput = {
    create?: XOR<articuloCreateWithoutUsers_articulosInput, articuloUncheckedCreateWithoutUsers_articulosInput>
    connectOrCreate?: articuloCreateOrConnectWithoutUsers_articulosInput
    connect?: articuloWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUsers_articulosNestedInput = {
    create?: XOR<usersCreateWithoutUsers_articulosInput, usersUncheckedCreateWithoutUsers_articulosInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_articulosInput
    upsert?: usersUpsertWithoutUsers_articulosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsers_articulosInput, usersUpdateWithoutUsers_articulosInput>, usersUncheckedUpdateWithoutUsers_articulosInput>
  }

  export type articuloUpdateOneRequiredWithoutUsers_articulosNestedInput = {
    create?: XOR<articuloCreateWithoutUsers_articulosInput, articuloUncheckedCreateWithoutUsers_articulosInput>
    connectOrCreate?: articuloCreateOrConnectWithoutUsers_articulosInput
    upsert?: articuloUpsertWithoutUsers_articulosInput
    connect?: articuloWhereUniqueInput
    update?: XOR<XOR<articuloUpdateToOneWithWhereWithoutUsers_articulosInput, articuloUpdateWithoutUsers_articulosInput>, articuloUncheckedUpdateWithoutUsers_articulosInput>
  }

  export type users_articulosCreateNestedManyWithoutArticuloInput = {
    create?: XOR<users_articulosCreateWithoutArticuloInput, users_articulosUncheckedCreateWithoutArticuloInput> | users_articulosCreateWithoutArticuloInput[] | users_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutArticuloInput | users_articulosCreateOrConnectWithoutArticuloInput[]
    createMany?: users_articulosCreateManyArticuloInputEnvelope
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
  }

  export type articulo_piezasCreateNestedManyWithoutArticuloInput = {
    create?: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput> | articulo_piezasCreateWithoutArticuloInput[] | articulo_piezasUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutArticuloInput | articulo_piezasCreateOrConnectWithoutArticuloInput[]
    createMany?: articulo_piezasCreateManyArticuloInputEnvelope
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
  }

  export type users_articulosUncheckedCreateNestedManyWithoutArticuloInput = {
    create?: XOR<users_articulosCreateWithoutArticuloInput, users_articulosUncheckedCreateWithoutArticuloInput> | users_articulosCreateWithoutArticuloInput[] | users_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutArticuloInput | users_articulosCreateOrConnectWithoutArticuloInput[]
    createMany?: users_articulosCreateManyArticuloInputEnvelope
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
  }

  export type articulo_piezasUncheckedCreateNestedManyWithoutArticuloInput = {
    create?: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput> | articulo_piezasCreateWithoutArticuloInput[] | articulo_piezasUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutArticuloInput | articulo_piezasCreateOrConnectWithoutArticuloInput[]
    createMany?: articulo_piezasCreateManyArticuloInputEnvelope
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type users_articulosUpdateManyWithoutArticuloNestedInput = {
    create?: XOR<users_articulosCreateWithoutArticuloInput, users_articulosUncheckedCreateWithoutArticuloInput> | users_articulosCreateWithoutArticuloInput[] | users_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutArticuloInput | users_articulosCreateOrConnectWithoutArticuloInput[]
    upsert?: users_articulosUpsertWithWhereUniqueWithoutArticuloInput | users_articulosUpsertWithWhereUniqueWithoutArticuloInput[]
    createMany?: users_articulosCreateManyArticuloInputEnvelope
    set?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    disconnect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    delete?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    update?: users_articulosUpdateWithWhereUniqueWithoutArticuloInput | users_articulosUpdateWithWhereUniqueWithoutArticuloInput[]
    updateMany?: users_articulosUpdateManyWithWhereWithoutArticuloInput | users_articulosUpdateManyWithWhereWithoutArticuloInput[]
    deleteMany?: users_articulosScalarWhereInput | users_articulosScalarWhereInput[]
  }

  export type articulo_piezasUpdateManyWithoutArticuloNestedInput = {
    create?: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput> | articulo_piezasCreateWithoutArticuloInput[] | articulo_piezasUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutArticuloInput | articulo_piezasCreateOrConnectWithoutArticuloInput[]
    upsert?: articulo_piezasUpsertWithWhereUniqueWithoutArticuloInput | articulo_piezasUpsertWithWhereUniqueWithoutArticuloInput[]
    createMany?: articulo_piezasCreateManyArticuloInputEnvelope
    set?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    disconnect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    delete?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    update?: articulo_piezasUpdateWithWhereUniqueWithoutArticuloInput | articulo_piezasUpdateWithWhereUniqueWithoutArticuloInput[]
    updateMany?: articulo_piezasUpdateManyWithWhereWithoutArticuloInput | articulo_piezasUpdateManyWithWhereWithoutArticuloInput[]
    deleteMany?: articulo_piezasScalarWhereInput | articulo_piezasScalarWhereInput[]
  }

  export type users_articulosUncheckedUpdateManyWithoutArticuloNestedInput = {
    create?: XOR<users_articulosCreateWithoutArticuloInput, users_articulosUncheckedCreateWithoutArticuloInput> | users_articulosCreateWithoutArticuloInput[] | users_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: users_articulosCreateOrConnectWithoutArticuloInput | users_articulosCreateOrConnectWithoutArticuloInput[]
    upsert?: users_articulosUpsertWithWhereUniqueWithoutArticuloInput | users_articulosUpsertWithWhereUniqueWithoutArticuloInput[]
    createMany?: users_articulosCreateManyArticuloInputEnvelope
    set?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    disconnect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    delete?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    connect?: users_articulosWhereUniqueInput | users_articulosWhereUniqueInput[]
    update?: users_articulosUpdateWithWhereUniqueWithoutArticuloInput | users_articulosUpdateWithWhereUniqueWithoutArticuloInput[]
    updateMany?: users_articulosUpdateManyWithWhereWithoutArticuloInput | users_articulosUpdateManyWithWhereWithoutArticuloInput[]
    deleteMany?: users_articulosScalarWhereInput | users_articulosScalarWhereInput[]
  }

  export type articulo_piezasUncheckedUpdateManyWithoutArticuloNestedInput = {
    create?: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput> | articulo_piezasCreateWithoutArticuloInput[] | articulo_piezasUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutArticuloInput | articulo_piezasCreateOrConnectWithoutArticuloInput[]
    upsert?: articulo_piezasUpsertWithWhereUniqueWithoutArticuloInput | articulo_piezasUpsertWithWhereUniqueWithoutArticuloInput[]
    createMany?: articulo_piezasCreateManyArticuloInputEnvelope
    set?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    disconnect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    delete?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    update?: articulo_piezasUpdateWithWhereUniqueWithoutArticuloInput | articulo_piezasUpdateWithWhereUniqueWithoutArticuloInput[]
    updateMany?: articulo_piezasUpdateManyWithWhereWithoutArticuloInput | articulo_piezasUpdateManyWithWhereWithoutArticuloInput[]
    deleteMany?: articulo_piezasScalarWhereInput | articulo_piezasScalarWhereInput[]
  }

  export type articuloCreateNestedOneWithoutArticulo_piezasInput = {
    create?: XOR<articuloCreateWithoutArticulo_piezasInput, articuloUncheckedCreateWithoutArticulo_piezasInput>
    connectOrCreate?: articuloCreateOrConnectWithoutArticulo_piezasInput
    connect?: articuloWhereUniqueInput
  }

  export type piezaCreateNestedOneWithoutArticulo_piezasInput = {
    create?: XOR<piezaCreateWithoutArticulo_piezasInput, piezaUncheckedCreateWithoutArticulo_piezasInput>
    connectOrCreate?: piezaCreateOrConnectWithoutArticulo_piezasInput
    connect?: piezaWhereUniqueInput
  }

  export type articuloUpdateOneRequiredWithoutArticulo_piezasNestedInput = {
    create?: XOR<articuloCreateWithoutArticulo_piezasInput, articuloUncheckedCreateWithoutArticulo_piezasInput>
    connectOrCreate?: articuloCreateOrConnectWithoutArticulo_piezasInput
    upsert?: articuloUpsertWithoutArticulo_piezasInput
    connect?: articuloWhereUniqueInput
    update?: XOR<XOR<articuloUpdateToOneWithWhereWithoutArticulo_piezasInput, articuloUpdateWithoutArticulo_piezasInput>, articuloUncheckedUpdateWithoutArticulo_piezasInput>
  }

  export type piezaUpdateOneRequiredWithoutArticulo_piezasNestedInput = {
    create?: XOR<piezaCreateWithoutArticulo_piezasInput, piezaUncheckedCreateWithoutArticulo_piezasInput>
    connectOrCreate?: piezaCreateOrConnectWithoutArticulo_piezasInput
    upsert?: piezaUpsertWithoutArticulo_piezasInput
    connect?: piezaWhereUniqueInput
    update?: XOR<XOR<piezaUpdateToOneWithWhereWithoutArticulo_piezasInput, piezaUpdateWithoutArticulo_piezasInput>, piezaUncheckedUpdateWithoutArticulo_piezasInput>
  }

  export type articulo_piezasCreateNestedManyWithoutPiezaInput = {
    create?: XOR<articulo_piezasCreateWithoutPiezaInput, articulo_piezasUncheckedCreateWithoutPiezaInput> | articulo_piezasCreateWithoutPiezaInput[] | articulo_piezasUncheckedCreateWithoutPiezaInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutPiezaInput | articulo_piezasCreateOrConnectWithoutPiezaInput[]
    createMany?: articulo_piezasCreateManyPiezaInputEnvelope
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
  }

  export type articulo_piezasUncheckedCreateNestedManyWithoutPiezaInput = {
    create?: XOR<articulo_piezasCreateWithoutPiezaInput, articulo_piezasUncheckedCreateWithoutPiezaInput> | articulo_piezasCreateWithoutPiezaInput[] | articulo_piezasUncheckedCreateWithoutPiezaInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutPiezaInput | articulo_piezasCreateOrConnectWithoutPiezaInput[]
    createMany?: articulo_piezasCreateManyPiezaInputEnvelope
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
  }

  export type articulo_piezasUpdateManyWithoutPiezaNestedInput = {
    create?: XOR<articulo_piezasCreateWithoutPiezaInput, articulo_piezasUncheckedCreateWithoutPiezaInput> | articulo_piezasCreateWithoutPiezaInput[] | articulo_piezasUncheckedCreateWithoutPiezaInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutPiezaInput | articulo_piezasCreateOrConnectWithoutPiezaInput[]
    upsert?: articulo_piezasUpsertWithWhereUniqueWithoutPiezaInput | articulo_piezasUpsertWithWhereUniqueWithoutPiezaInput[]
    createMany?: articulo_piezasCreateManyPiezaInputEnvelope
    set?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    disconnect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    delete?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    update?: articulo_piezasUpdateWithWhereUniqueWithoutPiezaInput | articulo_piezasUpdateWithWhereUniqueWithoutPiezaInput[]
    updateMany?: articulo_piezasUpdateManyWithWhereWithoutPiezaInput | articulo_piezasUpdateManyWithWhereWithoutPiezaInput[]
    deleteMany?: articulo_piezasScalarWhereInput | articulo_piezasScalarWhereInput[]
  }

  export type articulo_piezasUncheckedUpdateManyWithoutPiezaNestedInput = {
    create?: XOR<articulo_piezasCreateWithoutPiezaInput, articulo_piezasUncheckedCreateWithoutPiezaInput> | articulo_piezasCreateWithoutPiezaInput[] | articulo_piezasUncheckedCreateWithoutPiezaInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutPiezaInput | articulo_piezasCreateOrConnectWithoutPiezaInput[]
    upsert?: articulo_piezasUpsertWithWhereUniqueWithoutPiezaInput | articulo_piezasUpsertWithWhereUniqueWithoutPiezaInput[]
    createMany?: articulo_piezasCreateManyPiezaInputEnvelope
    set?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    disconnect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    delete?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
    update?: articulo_piezasUpdateWithWhereUniqueWithoutPiezaInput | articulo_piezasUpdateWithWhereUniqueWithoutPiezaInput[]
    updateMany?: articulo_piezasUpdateManyWithWhereWithoutPiezaInput | articulo_piezasUpdateManyWithWhereWithoutPiezaInput[]
    deleteMany?: articulo_piezasScalarWhereInput | articulo_piezasScalarWhereInput[]
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

  export type users_articulosCreateWithoutUsersInput = {
    articulo: articuloCreateNestedOneWithoutUsers_articulosInput
  }

  export type users_articulosUncheckedCreateWithoutUsersInput = {
    articulo_id: number
  }

  export type users_articulosCreateOrConnectWithoutUsersInput = {
    where: users_articulosWhereUniqueInput
    create: XOR<users_articulosCreateWithoutUsersInput, users_articulosUncheckedCreateWithoutUsersInput>
  }

  export type users_articulosCreateManyUsersInputEnvelope = {
    data: users_articulosCreateManyUsersInput | users_articulosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type users_articulosUpsertWithWhereUniqueWithoutUsersInput = {
    where: users_articulosWhereUniqueInput
    update: XOR<users_articulosUpdateWithoutUsersInput, users_articulosUncheckedUpdateWithoutUsersInput>
    create: XOR<users_articulosCreateWithoutUsersInput, users_articulosUncheckedCreateWithoutUsersInput>
  }

  export type users_articulosUpdateWithWhereUniqueWithoutUsersInput = {
    where: users_articulosWhereUniqueInput
    data: XOR<users_articulosUpdateWithoutUsersInput, users_articulosUncheckedUpdateWithoutUsersInput>
  }

  export type users_articulosUpdateManyWithWhereWithoutUsersInput = {
    where: users_articulosScalarWhereInput
    data: XOR<users_articulosUpdateManyMutationInput, users_articulosUncheckedUpdateManyWithoutUsersInput>
  }

  export type users_articulosScalarWhereInput = {
    AND?: users_articulosScalarWhereInput | users_articulosScalarWhereInput[]
    OR?: users_articulosScalarWhereInput[]
    NOT?: users_articulosScalarWhereInput | users_articulosScalarWhereInput[]
    user_id?: IntFilter<"users_articulos"> | number
    articulo_id?: IntFilter<"users_articulos"> | number
  }

  export type usersCreateWithoutUsers_articulosInput = {
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
  }

  export type usersUncheckedCreateWithoutUsers_articulosInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
  }

  export type usersCreateOrConnectWithoutUsers_articulosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_articulosInput, usersUncheckedCreateWithoutUsers_articulosInput>
  }

  export type articuloCreateWithoutUsers_articulosInput = {
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasCreateNestedManyWithoutArticuloInput
  }

  export type articuloUncheckedCreateWithoutUsers_articulosInput = {
    id?: number
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasUncheckedCreateNestedManyWithoutArticuloInput
  }

  export type articuloCreateOrConnectWithoutUsers_articulosInput = {
    where: articuloWhereUniqueInput
    create: XOR<articuloCreateWithoutUsers_articulosInput, articuloUncheckedCreateWithoutUsers_articulosInput>
  }

  export type usersUpsertWithoutUsers_articulosInput = {
    update: XOR<usersUpdateWithoutUsers_articulosInput, usersUncheckedUpdateWithoutUsers_articulosInput>
    create: XOR<usersCreateWithoutUsers_articulosInput, usersUncheckedCreateWithoutUsers_articulosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsers_articulosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsers_articulosInput, usersUncheckedUpdateWithoutUsers_articulosInput>
  }

  export type usersUpdateWithoutUsers_articulosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutUsers_articulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type articuloUpsertWithoutUsers_articulosInput = {
    update: XOR<articuloUpdateWithoutUsers_articulosInput, articuloUncheckedUpdateWithoutUsers_articulosInput>
    create: XOR<articuloCreateWithoutUsers_articulosInput, articuloUncheckedCreateWithoutUsers_articulosInput>
    where?: articuloWhereInput
  }

  export type articuloUpdateToOneWithWhereWithoutUsers_articulosInput = {
    where?: articuloWhereInput
    data: XOR<articuloUpdateWithoutUsers_articulosInput, articuloUncheckedUpdateWithoutUsers_articulosInput>
  }

  export type articuloUpdateWithoutUsers_articulosInput = {
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUpdateManyWithoutArticuloNestedInput
  }

  export type articuloUncheckedUpdateWithoutUsers_articulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUncheckedUpdateManyWithoutArticuloNestedInput
  }

  export type users_articulosCreateWithoutArticuloInput = {
    users: usersCreateNestedOneWithoutUsers_articulosInput
  }

  export type users_articulosUncheckedCreateWithoutArticuloInput = {
    user_id: number
  }

  export type users_articulosCreateOrConnectWithoutArticuloInput = {
    where: users_articulosWhereUniqueInput
    create: XOR<users_articulosCreateWithoutArticuloInput, users_articulosUncheckedCreateWithoutArticuloInput>
  }

  export type users_articulosCreateManyArticuloInputEnvelope = {
    data: users_articulosCreateManyArticuloInput | users_articulosCreateManyArticuloInput[]
    skipDuplicates?: boolean
  }

  export type articulo_piezasCreateWithoutArticuloInput = {
    pieza: piezaCreateNestedOneWithoutArticulo_piezasInput
  }

  export type articulo_piezasUncheckedCreateWithoutArticuloInput = {
    pieza_id: number
  }

  export type articulo_piezasCreateOrConnectWithoutArticuloInput = {
    where: articulo_piezasWhereUniqueInput
    create: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput>
  }

  export type articulo_piezasCreateManyArticuloInputEnvelope = {
    data: articulo_piezasCreateManyArticuloInput | articulo_piezasCreateManyArticuloInput[]
    skipDuplicates?: boolean
  }

  export type users_articulosUpsertWithWhereUniqueWithoutArticuloInput = {
    where: users_articulosWhereUniqueInput
    update: XOR<users_articulosUpdateWithoutArticuloInput, users_articulosUncheckedUpdateWithoutArticuloInput>
    create: XOR<users_articulosCreateWithoutArticuloInput, users_articulosUncheckedCreateWithoutArticuloInput>
  }

  export type users_articulosUpdateWithWhereUniqueWithoutArticuloInput = {
    where: users_articulosWhereUniqueInput
    data: XOR<users_articulosUpdateWithoutArticuloInput, users_articulosUncheckedUpdateWithoutArticuloInput>
  }

  export type users_articulosUpdateManyWithWhereWithoutArticuloInput = {
    where: users_articulosScalarWhereInput
    data: XOR<users_articulosUpdateManyMutationInput, users_articulosUncheckedUpdateManyWithoutArticuloInput>
  }

  export type articulo_piezasUpsertWithWhereUniqueWithoutArticuloInput = {
    where: articulo_piezasWhereUniqueInput
    update: XOR<articulo_piezasUpdateWithoutArticuloInput, articulo_piezasUncheckedUpdateWithoutArticuloInput>
    create: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput>
  }

  export type articulo_piezasUpdateWithWhereUniqueWithoutArticuloInput = {
    where: articulo_piezasWhereUniqueInput
    data: XOR<articulo_piezasUpdateWithoutArticuloInput, articulo_piezasUncheckedUpdateWithoutArticuloInput>
  }

  export type articulo_piezasUpdateManyWithWhereWithoutArticuloInput = {
    where: articulo_piezasScalarWhereInput
    data: XOR<articulo_piezasUpdateManyMutationInput, articulo_piezasUncheckedUpdateManyWithoutArticuloInput>
  }

  export type articulo_piezasScalarWhereInput = {
    AND?: articulo_piezasScalarWhereInput | articulo_piezasScalarWhereInput[]
    OR?: articulo_piezasScalarWhereInput[]
    NOT?: articulo_piezasScalarWhereInput | articulo_piezasScalarWhereInput[]
    articulo_id?: IntFilter<"articulo_piezas"> | number
    pieza_id?: IntFilter<"articulo_piezas"> | number
  }

  export type articuloCreateWithoutArticulo_piezasInput = {
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    users_articulos?: users_articulosCreateNestedManyWithoutArticuloInput
  }

  export type articuloUncheckedCreateWithoutArticulo_piezasInput = {
    id?: number
    codigo?: number | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    users_articulos?: users_articulosUncheckedCreateNestedManyWithoutArticuloInput
  }

  export type articuloCreateOrConnectWithoutArticulo_piezasInput = {
    where: articuloWhereUniqueInput
    create: XOR<articuloCreateWithoutArticulo_piezasInput, articuloUncheckedCreateWithoutArticulo_piezasInput>
  }

  export type piezaCreateWithoutArticulo_piezasInput = {
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
  }

  export type piezaUncheckedCreateWithoutArticulo_piezasInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG?: string | null
    plano_pleg_SOLID?: string | null
    plano_laser_DXF?: string | null
    cte_ganancia?: number | null
  }

  export type piezaCreateOrConnectWithoutArticulo_piezasInput = {
    where: piezaWhereUniqueInput
    create: XOR<piezaCreateWithoutArticulo_piezasInput, piezaUncheckedCreateWithoutArticulo_piezasInput>
  }

  export type articuloUpsertWithoutArticulo_piezasInput = {
    update: XOR<articuloUpdateWithoutArticulo_piezasInput, articuloUncheckedUpdateWithoutArticulo_piezasInput>
    create: XOR<articuloCreateWithoutArticulo_piezasInput, articuloUncheckedCreateWithoutArticulo_piezasInput>
    where?: articuloWhereInput
  }

  export type articuloUpdateToOneWithWhereWithoutArticulo_piezasInput = {
    where?: articuloWhereInput
    data: XOR<articuloUpdateWithoutArticulo_piezasInput, articuloUncheckedUpdateWithoutArticulo_piezasInput>
  }

  export type articuloUpdateWithoutArticulo_piezasInput = {
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    users_articulos?: users_articulosUpdateManyWithoutArticuloNestedInput
  }

  export type articuloUncheckedUpdateWithoutArticulo_piezasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    users_articulos?: users_articulosUncheckedUpdateManyWithoutArticuloNestedInput
  }

  export type piezaUpsertWithoutArticulo_piezasInput = {
    update: XOR<piezaUpdateWithoutArticulo_piezasInput, piezaUncheckedUpdateWithoutArticulo_piezasInput>
    create: XOR<piezaCreateWithoutArticulo_piezasInput, piezaUncheckedCreateWithoutArticulo_piezasInput>
    where?: piezaWhereInput
  }

  export type piezaUpdateToOneWithWhereWithoutArticulo_piezasInput = {
    where?: piezaWhereInput
    data: XOR<piezaUpdateWithoutArticulo_piezasInput, piezaUncheckedUpdateWithoutArticulo_piezasInput>
  }

  export type piezaUpdateWithoutArticulo_piezasInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaUncheckedUpdateWithoutArticulo_piezasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articulo_piezasCreateWithoutPiezaInput = {
    articulo: articuloCreateNestedOneWithoutArticulo_piezasInput
  }

  export type articulo_piezasUncheckedCreateWithoutPiezaInput = {
    articulo_id: number
  }

  export type articulo_piezasCreateOrConnectWithoutPiezaInput = {
    where: articulo_piezasWhereUniqueInput
    create: XOR<articulo_piezasCreateWithoutPiezaInput, articulo_piezasUncheckedCreateWithoutPiezaInput>
  }

  export type articulo_piezasCreateManyPiezaInputEnvelope = {
    data: articulo_piezasCreateManyPiezaInput | articulo_piezasCreateManyPiezaInput[]
    skipDuplicates?: boolean
  }

  export type articulo_piezasUpsertWithWhereUniqueWithoutPiezaInput = {
    where: articulo_piezasWhereUniqueInput
    update: XOR<articulo_piezasUpdateWithoutPiezaInput, articulo_piezasUncheckedUpdateWithoutPiezaInput>
    create: XOR<articulo_piezasCreateWithoutPiezaInput, articulo_piezasUncheckedCreateWithoutPiezaInput>
  }

  export type articulo_piezasUpdateWithWhereUniqueWithoutPiezaInput = {
    where: articulo_piezasWhereUniqueInput
    data: XOR<articulo_piezasUpdateWithoutPiezaInput, articulo_piezasUncheckedUpdateWithoutPiezaInput>
  }

  export type articulo_piezasUpdateManyWithWhereWithoutPiezaInput = {
    where: articulo_piezasScalarWhereInput
    data: XOR<articulo_piezasUpdateManyMutationInput, articulo_piezasUncheckedUpdateManyWithoutPiezaInput>
  }

  export type users_articulosCreateManyUsersInput = {
    articulo_id: number
  }

  export type users_articulosUpdateWithoutUsersInput = {
    articulo?: articuloUpdateOneRequiredWithoutUsers_articulosNestedInput
  }

  export type users_articulosUncheckedUpdateWithoutUsersInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_articulosUncheckedUpdateManyWithoutUsersInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_articulosCreateManyArticuloInput = {
    user_id: number
  }

  export type articulo_piezasCreateManyArticuloInput = {
    pieza_id: number
  }

  export type users_articulosUpdateWithoutArticuloInput = {
    users?: usersUpdateOneRequiredWithoutUsers_articulosNestedInput
  }

  export type users_articulosUncheckedUpdateWithoutArticuloInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_articulosUncheckedUpdateManyWithoutArticuloInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type articulo_piezasUpdateWithoutArticuloInput = {
    pieza?: piezaUpdateOneRequiredWithoutArticulo_piezasNestedInput
  }

  export type articulo_piezasUncheckedUpdateWithoutArticuloInput = {
    pieza_id?: IntFieldUpdateOperationsInput | number
  }

  export type articulo_piezasUncheckedUpdateManyWithoutArticuloInput = {
    pieza_id?: IntFieldUpdateOperationsInput | number
  }

  export type articulo_piezasCreateManyPiezaInput = {
    articulo_id: number
  }

  export type articulo_piezasUpdateWithoutPiezaInput = {
    articulo?: articuloUpdateOneRequiredWithoutArticulo_piezasNestedInput
  }

  export type articulo_piezasUncheckedUpdateWithoutPiezaInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
  }

  export type articulo_piezasUncheckedUpdateManyWithoutPiezaInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
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