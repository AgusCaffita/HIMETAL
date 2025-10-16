
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
 * Model users_pedidos
 * 
 */
export type users_pedidos = $Result.DefaultSelection<Prisma.$users_pedidosPayload>
/**
 * Model pedido
 * 
 */
export type pedido = $Result.DefaultSelection<Prisma.$pedidoPayload>
/**
 * Model pedido_articulos
 * 
 */
export type pedido_articulos = $Result.DefaultSelection<Prisma.$pedido_articulosPayload>
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
   * `prisma.users_pedidos`: Exposes CRUD operations for the **users_pedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_pedidos
    * const users_pedidos = await prisma.users_pedidos.findMany()
    * ```
    */
  get users_pedidos(): Prisma.users_pedidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.pedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido_articulos`: Exposes CRUD operations for the **pedido_articulos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedido_articulos
    * const pedido_articulos = await prisma.pedido_articulos.findMany()
    * ```
    */
  get pedido_articulos(): Prisma.pedido_articulosDelegate<ExtArgs, ClientOptions>;

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
    users_pedidos: 'users_pedidos',
    pedido: 'pedido',
    pedido_articulos: 'pedido_articulos',
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
      modelProps: "users" | "users_pedidos" | "pedido" | "pedido_articulos" | "articulo" | "articulo_piezas" | "pieza"
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
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
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
      users_pedidos: {
        payload: Prisma.$users_pedidosPayload<ExtArgs>
        fields: Prisma.users_pedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.users_pedidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.users_pedidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>
          }
          findFirst: {
            args: Prisma.users_pedidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.users_pedidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>
          }
          findMany: {
            args: Prisma.users_pedidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>[]
          }
          create: {
            args: Prisma.users_pedidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>
          }
          createMany: {
            args: Prisma.users_pedidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.users_pedidosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>[]
          }
          delete: {
            args: Prisma.users_pedidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>
          }
          update: {
            args: Prisma.users_pedidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>
          }
          deleteMany: {
            args: Prisma.users_pedidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.users_pedidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.users_pedidosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>[]
          }
          upsert: {
            args: Prisma.users_pedidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$users_pedidosPayload>
          }
          aggregate: {
            args: Prisma.Users_pedidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_pedidos>
          }
          groupBy: {
            args: Prisma.users_pedidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_pedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.users_pedidosCountArgs<ExtArgs>
            result: $Utils.Optional<Users_pedidosCountAggregateOutputType> | number
          }
        }
      }
      pedido: {
        payload: Prisma.$pedidoPayload<ExtArgs>
        fields: Prisma.pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findFirst: {
            args: Prisma.pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          findMany: {
            args: Prisma.pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          create: {
            args: Prisma.pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          createMany: {
            args: Prisma.pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          delete: {
            args: Prisma.pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          update: {
            args: Prisma.pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          deleteMany: {
            args: Prisma.pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>[]
          }
          upsert: {
            args: Prisma.pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      pedido_articulos: {
        payload: Prisma.$pedido_articulosPayload<ExtArgs>
        fields: Prisma.pedido_articulosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pedido_articulosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pedido_articulosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>
          }
          findFirst: {
            args: Prisma.pedido_articulosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pedido_articulosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>
          }
          findMany: {
            args: Prisma.pedido_articulosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>[]
          }
          create: {
            args: Prisma.pedido_articulosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>
          }
          createMany: {
            args: Prisma.pedido_articulosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pedido_articulosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>[]
          }
          delete: {
            args: Prisma.pedido_articulosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>
          }
          update: {
            args: Prisma.pedido_articulosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>
          }
          deleteMany: {
            args: Prisma.pedido_articulosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pedido_articulosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pedido_articulosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>[]
          }
          upsert: {
            args: Prisma.pedido_articulosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pedido_articulosPayload>
          }
          aggregate: {
            args: Prisma.Pedido_articulosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido_articulos>
          }
          groupBy: {
            args: Prisma.pedido_articulosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pedido_articulosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pedido_articulosCountArgs<ExtArgs>
            result: $Utils.Optional<Pedido_articulosCountAggregateOutputType> | number
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
          createManyAndReturn: {
            args: Prisma.articuloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.articuloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articuloPayload>[]
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
          createManyAndReturn: {
            args: Prisma.articulo_piezasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.articulo_piezasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$articulo_piezasPayload>[]
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
          createManyAndReturn: {
            args: Prisma.piezaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.piezaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piezaPayload>[]
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
    users_pedidos?: users_pedidosOmit
    pedido?: pedidoOmit
    pedido_articulos?: pedido_articulosOmit
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
    users_pedidos: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_pedidos?: boolean | UsersCountOutputTypeCountUsers_pedidosArgs
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
  export type UsersCountOutputTypeCountUsers_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_pedidosWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    user_pedidos: number
    pedido_articulos: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_pedidos?: boolean | PedidoCountOutputTypeCountUser_pedidosArgs
    pedido_articulos?: boolean | PedidoCountOutputTypeCountPedido_articulosArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountUser_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_pedidosWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPedido_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_articulosWhereInput
  }


  /**
   * Count Type ArticuloCountOutputType
   */

  export type ArticuloCountOutputType = {
    pedido_articulos: number
    articulo_piezas: number
  }

  export type ArticuloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido_articulos?: boolean | ArticuloCountOutputTypeCountPedido_articulosArgs
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
  export type ArticuloCountOutputTypeCountPedido_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_articulosWhereInput
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
    rol: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nombre: string | null
    apellido: string | null
    rol: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nombre: number
    apellido: number
    rol: number
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
    rol?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    rol?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nombre?: true
    apellido?: true
    rol?: true
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
    rol: string
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
    rol?: boolean
    users_pedidos?: boolean | users$users_pedidosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nombre?: boolean
    apellido?: boolean
    rol?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nombre" | "apellido" | "rol", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_pedidos?: boolean | users$users_pedidosArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      users_pedidos: Prisma.$users_pedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nombre: string | null
      apellido: string | null
      rol: string
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
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    users_pedidos<T extends users$users_pedidosArgs<ExtArgs> = {}>(args?: Subset<T, users$users_pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly rol: FieldRef<"users", 'String'>
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
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
   * users.users_pedidos
   */
  export type users$users_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    where?: users_pedidosWhereInput
    orderBy?: users_pedidosOrderByWithRelationInput | users_pedidosOrderByWithRelationInput[]
    cursor?: users_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_pedidosScalarFieldEnum | Users_pedidosScalarFieldEnum[]
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
   * Model users_pedidos
   */

  export type AggregateUsers_pedidos = {
    _count: Users_pedidosCountAggregateOutputType | null
    _avg: Users_pedidosAvgAggregateOutputType | null
    _sum: Users_pedidosSumAggregateOutputType | null
    _min: Users_pedidosMinAggregateOutputType | null
    _max: Users_pedidosMaxAggregateOutputType | null
  }

  export type Users_pedidosAvgAggregateOutputType = {
    user_id: number | null
    pedido_id: number | null
  }

  export type Users_pedidosSumAggregateOutputType = {
    user_id: number | null
    pedido_id: number | null
  }

  export type Users_pedidosMinAggregateOutputType = {
    user_id: number | null
    pedido_id: number | null
  }

  export type Users_pedidosMaxAggregateOutputType = {
    user_id: number | null
    pedido_id: number | null
  }

  export type Users_pedidosCountAggregateOutputType = {
    user_id: number
    pedido_id: number
    _all: number
  }


  export type Users_pedidosAvgAggregateInputType = {
    user_id?: true
    pedido_id?: true
  }

  export type Users_pedidosSumAggregateInputType = {
    user_id?: true
    pedido_id?: true
  }

  export type Users_pedidosMinAggregateInputType = {
    user_id?: true
    pedido_id?: true
  }

  export type Users_pedidosMaxAggregateInputType = {
    user_id?: true
    pedido_id?: true
  }

  export type Users_pedidosCountAggregateInputType = {
    user_id?: true
    pedido_id?: true
    _all?: true
  }

  export type Users_pedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_pedidos to aggregate.
     */
    where?: users_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_pedidos to fetch.
     */
    orderBy?: users_pedidosOrderByWithRelationInput | users_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: users_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users_pedidos
    **/
    _count?: true | Users_pedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_pedidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_pedidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_pedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_pedidosMaxAggregateInputType
  }

  export type GetUsers_pedidosAggregateType<T extends Users_pedidosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_pedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_pedidos[P]>
      : GetScalarType<T[P], AggregateUsers_pedidos[P]>
  }




  export type users_pedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: users_pedidosWhereInput
    orderBy?: users_pedidosOrderByWithAggregationInput | users_pedidosOrderByWithAggregationInput[]
    by: Users_pedidosScalarFieldEnum[] | Users_pedidosScalarFieldEnum
    having?: users_pedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_pedidosCountAggregateInputType | true
    _avg?: Users_pedidosAvgAggregateInputType
    _sum?: Users_pedidosSumAggregateInputType
    _min?: Users_pedidosMinAggregateInputType
    _max?: Users_pedidosMaxAggregateInputType
  }

  export type Users_pedidosGroupByOutputType = {
    user_id: number
    pedido_id: number
    _count: Users_pedidosCountAggregateOutputType | null
    _avg: Users_pedidosAvgAggregateOutputType | null
    _sum: Users_pedidosSumAggregateOutputType | null
    _min: Users_pedidosMinAggregateOutputType | null
    _max: Users_pedidosMaxAggregateOutputType | null
  }

  type GetUsers_pedidosGroupByPayload<T extends users_pedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_pedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_pedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_pedidosGroupByOutputType[P]>
            : GetScalarType<T[P], Users_pedidosGroupByOutputType[P]>
        }
      >
    >


  export type users_pedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pedido_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_pedidos"]>

  export type users_pedidosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pedido_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_pedidos"]>

  export type users_pedidosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    pedido_id?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_pedidos"]>

  export type users_pedidosSelectScalar = {
    user_id?: boolean
    pedido_id?: boolean
  }

  export type users_pedidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "pedido_id", ExtArgs["result"]["users_pedidos"]>
  export type users_pedidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }
  export type users_pedidosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }
  export type users_pedidosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
  }

  export type $users_pedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users_pedidos"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      pedido: Prisma.$pedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      pedido_id: number
    }, ExtArgs["result"]["users_pedidos"]>
    composites: {}
  }

  type users_pedidosGetPayload<S extends boolean | null | undefined | users_pedidosDefaultArgs> = $Result.GetResult<Prisma.$users_pedidosPayload, S>

  type users_pedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<users_pedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_pedidosCountAggregateInputType | true
    }

  export interface users_pedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users_pedidos'], meta: { name: 'users_pedidos' } }
    /**
     * Find zero or one Users_pedidos that matches the filter.
     * @param {users_pedidosFindUniqueArgs} args - Arguments to find a Users_pedidos
     * @example
     * // Get one Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends users_pedidosFindUniqueArgs>(args: SelectSubset<T, users_pedidosFindUniqueArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_pedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {users_pedidosFindUniqueOrThrowArgs} args - Arguments to find a Users_pedidos
     * @example
     * // Get one Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends users_pedidosFindUniqueOrThrowArgs>(args: SelectSubset<T, users_pedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_pedidosFindFirstArgs} args - Arguments to find a Users_pedidos
     * @example
     * // Get one Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends users_pedidosFindFirstArgs>(args?: SelectSubset<T, users_pedidosFindFirstArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_pedidosFindFirstOrThrowArgs} args - Arguments to find a Users_pedidos
     * @example
     * // Get one Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends users_pedidosFindFirstOrThrowArgs>(args?: SelectSubset<T, users_pedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_pedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.findMany()
     * 
     * // Get first 10 Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const users_pedidosWithUser_idOnly = await prisma.users_pedidos.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends users_pedidosFindManyArgs>(args?: SelectSubset<T, users_pedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_pedidos.
     * @param {users_pedidosCreateArgs} args - Arguments to create a Users_pedidos.
     * @example
     * // Create one Users_pedidos
     * const Users_pedidos = await prisma.users_pedidos.create({
     *   data: {
     *     // ... data to create a Users_pedidos
     *   }
     * })
     * 
     */
    create<T extends users_pedidosCreateArgs>(args: SelectSubset<T, users_pedidosCreateArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_pedidos.
     * @param {users_pedidosCreateManyArgs} args - Arguments to create many Users_pedidos.
     * @example
     * // Create many Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends users_pedidosCreateManyArgs>(args?: SelectSubset<T, users_pedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_pedidos and returns the data saved in the database.
     * @param {users_pedidosCreateManyAndReturnArgs} args - Arguments to create many Users_pedidos.
     * @example
     * // Create many Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_pedidos and only return the `user_id`
     * const users_pedidosWithUser_idOnly = await prisma.users_pedidos.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends users_pedidosCreateManyAndReturnArgs>(args?: SelectSubset<T, users_pedidosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_pedidos.
     * @param {users_pedidosDeleteArgs} args - Arguments to delete one Users_pedidos.
     * @example
     * // Delete one Users_pedidos
     * const Users_pedidos = await prisma.users_pedidos.delete({
     *   where: {
     *     // ... filter to delete one Users_pedidos
     *   }
     * })
     * 
     */
    delete<T extends users_pedidosDeleteArgs>(args: SelectSubset<T, users_pedidosDeleteArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_pedidos.
     * @param {users_pedidosUpdateArgs} args - Arguments to update one Users_pedidos.
     * @example
     * // Update one Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends users_pedidosUpdateArgs>(args: SelectSubset<T, users_pedidosUpdateArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_pedidos.
     * @param {users_pedidosDeleteManyArgs} args - Arguments to filter Users_pedidos to delete.
     * @example
     * // Delete a few Users_pedidos
     * const { count } = await prisma.users_pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends users_pedidosDeleteManyArgs>(args?: SelectSubset<T, users_pedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_pedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends users_pedidosUpdateManyArgs>(args: SelectSubset<T, users_pedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_pedidos and returns the data updated in the database.
     * @param {users_pedidosUpdateManyAndReturnArgs} args - Arguments to update many Users_pedidos.
     * @example
     * // Update many Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_pedidos and only return the `user_id`
     * const users_pedidosWithUser_idOnly = await prisma.users_pedidos.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends users_pedidosUpdateManyAndReturnArgs>(args: SelectSubset<T, users_pedidosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_pedidos.
     * @param {users_pedidosUpsertArgs} args - Arguments to update or create a Users_pedidos.
     * @example
     * // Update or create a Users_pedidos
     * const users_pedidos = await prisma.users_pedidos.upsert({
     *   create: {
     *     // ... data to create a Users_pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_pedidos we want to update
     *   }
     * })
     */
    upsert<T extends users_pedidosUpsertArgs>(args: SelectSubset<T, users_pedidosUpsertArgs<ExtArgs>>): Prisma__users_pedidosClient<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_pedidosCountArgs} args - Arguments to filter Users_pedidos to count.
     * @example
     * // Count the number of Users_pedidos
     * const count = await prisma.users_pedidos.count({
     *   where: {
     *     // ... the filter for the Users_pedidos we want to count
     *   }
     * })
    **/
    count<T extends users_pedidosCountArgs>(
      args?: Subset<T, users_pedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_pedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_pedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Users_pedidosAggregateArgs>(args: Subset<T, Users_pedidosAggregateArgs>): Prisma.PrismaPromise<GetUsers_pedidosAggregateType<T>>

    /**
     * Group by Users_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {users_pedidosGroupByArgs} args - Group by arguments.
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
      T extends users_pedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: users_pedidosGroupByArgs['orderBy'] }
        : { orderBy?: users_pedidosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, users_pedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_pedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users_pedidos model
   */
  readonly fields: users_pedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users_pedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__users_pedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the users_pedidos model
   */
  interface users_pedidosFieldRefs {
    readonly user_id: FieldRef<"users_pedidos", 'Int'>
    readonly pedido_id: FieldRef<"users_pedidos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users_pedidos findUnique
   */
  export type users_pedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which users_pedidos to fetch.
     */
    where: users_pedidosWhereUniqueInput
  }

  /**
   * users_pedidos findUniqueOrThrow
   */
  export type users_pedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which users_pedidos to fetch.
     */
    where: users_pedidosWhereUniqueInput
  }

  /**
   * users_pedidos findFirst
   */
  export type users_pedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which users_pedidos to fetch.
     */
    where?: users_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_pedidos to fetch.
     */
    orderBy?: users_pedidosOrderByWithRelationInput | users_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_pedidos.
     */
    cursor?: users_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_pedidos.
     */
    distinct?: Users_pedidosScalarFieldEnum | Users_pedidosScalarFieldEnum[]
  }

  /**
   * users_pedidos findFirstOrThrow
   */
  export type users_pedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which users_pedidos to fetch.
     */
    where?: users_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_pedidos to fetch.
     */
    orderBy?: users_pedidosOrderByWithRelationInput | users_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users_pedidos.
     */
    cursor?: users_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users_pedidos.
     */
    distinct?: Users_pedidosScalarFieldEnum | Users_pedidosScalarFieldEnum[]
  }

  /**
   * users_pedidos findMany
   */
  export type users_pedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which users_pedidos to fetch.
     */
    where?: users_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users_pedidos to fetch.
     */
    orderBy?: users_pedidosOrderByWithRelationInput | users_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users_pedidos.
     */
    cursor?: users_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users_pedidos.
     */
    skip?: number
    distinct?: Users_pedidosScalarFieldEnum | Users_pedidosScalarFieldEnum[]
  }

  /**
   * users_pedidos create
   */
  export type users_pedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * The data needed to create a users_pedidos.
     */
    data: XOR<users_pedidosCreateInput, users_pedidosUncheckedCreateInput>
  }

  /**
   * users_pedidos createMany
   */
  export type users_pedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users_pedidos.
     */
    data: users_pedidosCreateManyInput | users_pedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users_pedidos createManyAndReturn
   */
  export type users_pedidosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * The data used to create many users_pedidos.
     */
    data: users_pedidosCreateManyInput | users_pedidosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users_pedidos update
   */
  export type users_pedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * The data needed to update a users_pedidos.
     */
    data: XOR<users_pedidosUpdateInput, users_pedidosUncheckedUpdateInput>
    /**
     * Choose, which users_pedidos to update.
     */
    where: users_pedidosWhereUniqueInput
  }

  /**
   * users_pedidos updateMany
   */
  export type users_pedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users_pedidos.
     */
    data: XOR<users_pedidosUpdateManyMutationInput, users_pedidosUncheckedUpdateManyInput>
    /**
     * Filter which users_pedidos to update
     */
    where?: users_pedidosWhereInput
    /**
     * Limit how many users_pedidos to update.
     */
    limit?: number
  }

  /**
   * users_pedidos updateManyAndReturn
   */
  export type users_pedidosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * The data used to update users_pedidos.
     */
    data: XOR<users_pedidosUpdateManyMutationInput, users_pedidosUncheckedUpdateManyInput>
    /**
     * Filter which users_pedidos to update
     */
    where?: users_pedidosWhereInput
    /**
     * Limit how many users_pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users_pedidos upsert
   */
  export type users_pedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * The filter to search for the users_pedidos to update in case it exists.
     */
    where: users_pedidosWhereUniqueInput
    /**
     * In case the users_pedidos found by the `where` argument doesn't exist, create a new users_pedidos with this data.
     */
    create: XOR<users_pedidosCreateInput, users_pedidosUncheckedCreateInput>
    /**
     * In case the users_pedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<users_pedidosUpdateInput, users_pedidosUncheckedUpdateInput>
  }

  /**
   * users_pedidos delete
   */
  export type users_pedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    /**
     * Filter which users_pedidos to delete.
     */
    where: users_pedidosWhereUniqueInput
  }

  /**
   * users_pedidos deleteMany
   */
  export type users_pedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users_pedidos to delete
     */
    where?: users_pedidosWhereInput
    /**
     * Limit how many users_pedidos to delete.
     */
    limit?: number
  }

  /**
   * users_pedidos without action
   */
  export type users_pedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
  }


  /**
   * Model pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    presupuesto: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    presupuesto: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    presupuesto: number | null
    estado: string | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    presupuesto: number | null
    estado: string | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    codigo: number
    presupuesto: number
    estado: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    presupuesto?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    presupuesto?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    codigo?: true
    presupuesto?: true
    estado?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    codigo?: true
    presupuesto?: true
    estado?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    codigo?: true
    presupuesto?: true
    estado?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido to aggregate.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedidoWhereInput
    orderBy?: pedidoOrderByWithAggregationInput | pedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    codigo: string | null
    presupuesto: number | null
    estado: string
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    presupuesto?: boolean
    estado?: boolean
    user_pedidos?: boolean | pedido$user_pedidosArgs<ExtArgs>
    pedido_articulos?: boolean | pedido$pedido_articulosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    presupuesto?: boolean
    estado?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    presupuesto?: boolean
    estado?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type pedidoSelectScalar = {
    id?: boolean
    codigo?: boolean
    presupuesto?: boolean
    estado?: boolean
  }

  export type pedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "presupuesto" | "estado", ExtArgs["result"]["pedido"]>
  export type pedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_pedidos?: boolean | pedido$user_pedidosArgs<ExtArgs>
    pedido_articulos?: boolean | pedido$pedido_articulosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido"
    objects: {
      user_pedidos: Prisma.$users_pedidosPayload<ExtArgs>[]
      pedido_articulos: Prisma.$pedido_articulosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string | null
      presupuesto: number | null
      estado: string
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = $Result.GetResult<Prisma.$pedidoPayload, S>

  type pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido'], meta: { name: 'pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {pedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedidoFindUniqueArgs>(args: SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedidoFindFirstArgs>(args?: SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pedidoFindManyArgs>(args?: SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {pedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends pedidoCreateArgs>(args: SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {pedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedidoCreateManyArgs>(args?: SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {pedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {pedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends pedidoDeleteArgs>(args: SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {pedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedidoUpdateArgs>(args: SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {pedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedidoDeleteManyArgs>(args?: SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedidoUpdateManyArgs>(args: SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {pedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {pedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends pedidoUpsertArgs>(args: SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends pedidoCountArgs>(
      args?: Subset<T, pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedidoGroupByArgs} args - Group by arguments.
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
      T extends pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedidoGroupByArgs['orderBy'] }
        : { orderBy?: pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido model
   */
  readonly fields: pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_pedidos<T extends pedido$user_pedidosArgs<ExtArgs> = {}>(args?: Subset<T, pedido$user_pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$users_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedido_articulos<T extends pedido$pedido_articulosArgs<ExtArgs> = {}>(args?: Subset<T, pedido$pedido_articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the pedido model
   */
  interface pedidoFieldRefs {
    readonly id: FieldRef<"pedido", 'Int'>
    readonly codigo: FieldRef<"pedido", 'String'>
    readonly presupuesto: FieldRef<"pedido", 'Int'>
    readonly estado: FieldRef<"pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pedido findUnique
   */
  export type pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findUniqueOrThrow
   */
  export type pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido findFirst
   */
  export type pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findFirstOrThrow
   */
  export type pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedido to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido findMany
   */
  export type pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter, which pedidos to fetch.
     */
    where?: pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedidos to fetch.
     */
    orderBy?: pedidoOrderByWithRelationInput | pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedidos.
     */
    cursor?: pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * pedido create
   */
  export type pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido.
     */
    data?: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
  }

  /**
   * pedido createMany
   */
  export type pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido createManyAndReturn
   */
  export type pedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to create many pedidos.
     */
    data: pedidoCreateManyInput | pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido update
   */
  export type pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido.
     */
    data: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
    /**
     * Choose, which pedido to update.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido updateMany
   */
  export type pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido updateManyAndReturn
   */
  export type pedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * The data used to update pedidos.
     */
    data: XOR<pedidoUpdateManyMutationInput, pedidoUncheckedUpdateManyInput>
    /**
     * Filter which pedidos to update
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to update.
     */
    limit?: number
  }

  /**
   * pedido upsert
   */
  export type pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido to update in case it exists.
     */
    where: pedidoWhereUniqueInput
    /**
     * In case the pedido found by the `where` argument doesn't exist, create a new pedido with this data.
     */
    create: XOR<pedidoCreateInput, pedidoUncheckedCreateInput>
    /**
     * In case the pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedidoUpdateInput, pedidoUncheckedUpdateInput>
  }

  /**
   * pedido delete
   */
  export type pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
    /**
     * Filter which pedido to delete.
     */
    where: pedidoWhereUniqueInput
  }

  /**
   * pedido deleteMany
   */
  export type pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedidos to delete
     */
    where?: pedidoWhereInput
    /**
     * Limit how many pedidos to delete.
     */
    limit?: number
  }

  /**
   * pedido.user_pedidos
   */
  export type pedido$user_pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users_pedidos
     */
    select?: users_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users_pedidos
     */
    omit?: users_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: users_pedidosInclude<ExtArgs> | null
    where?: users_pedidosWhereInput
    orderBy?: users_pedidosOrderByWithRelationInput | users_pedidosOrderByWithRelationInput[]
    cursor?: users_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_pedidosScalarFieldEnum | Users_pedidosScalarFieldEnum[]
  }

  /**
   * pedido.pedido_articulos
   */
  export type pedido$pedido_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    where?: pedido_articulosWhereInput
    orderBy?: pedido_articulosOrderByWithRelationInput | pedido_articulosOrderByWithRelationInput[]
    cursor?: pedido_articulosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_articulosScalarFieldEnum | Pedido_articulosScalarFieldEnum[]
  }

  /**
   * pedido without action
   */
  export type pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido
     */
    select?: pedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido
     */
    omit?: pedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedidoInclude<ExtArgs> | null
  }


  /**
   * Model pedido_articulos
   */

  export type AggregatePedido_articulos = {
    _count: Pedido_articulosCountAggregateOutputType | null
    _avg: Pedido_articulosAvgAggregateOutputType | null
    _sum: Pedido_articulosSumAggregateOutputType | null
    _min: Pedido_articulosMinAggregateOutputType | null
    _max: Pedido_articulosMaxAggregateOutputType | null
  }

  export type Pedido_articulosAvgAggregateOutputType = {
    pedido_id: number | null
    articulo_id: number | null
    cantidad: number | null
  }

  export type Pedido_articulosSumAggregateOutputType = {
    pedido_id: number | null
    articulo_id: number | null
    cantidad: number | null
  }

  export type Pedido_articulosMinAggregateOutputType = {
    pedido_id: number | null
    articulo_id: number | null
    cantidad: number | null
  }

  export type Pedido_articulosMaxAggregateOutputType = {
    pedido_id: number | null
    articulo_id: number | null
    cantidad: number | null
  }

  export type Pedido_articulosCountAggregateOutputType = {
    pedido_id: number
    articulo_id: number
    cantidad: number
    _all: number
  }


  export type Pedido_articulosAvgAggregateInputType = {
    pedido_id?: true
    articulo_id?: true
    cantidad?: true
  }

  export type Pedido_articulosSumAggregateInputType = {
    pedido_id?: true
    articulo_id?: true
    cantidad?: true
  }

  export type Pedido_articulosMinAggregateInputType = {
    pedido_id?: true
    articulo_id?: true
    cantidad?: true
  }

  export type Pedido_articulosMaxAggregateInputType = {
    pedido_id?: true
    articulo_id?: true
    cantidad?: true
  }

  export type Pedido_articulosCountAggregateInputType = {
    pedido_id?: true
    articulo_id?: true
    cantidad?: true
    _all?: true
  }

  export type Pedido_articulosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_articulos to aggregate.
     */
    where?: pedido_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_articulos to fetch.
     */
    orderBy?: pedido_articulosOrderByWithRelationInput | pedido_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pedido_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pedido_articulos
    **/
    _count?: true | Pedido_articulosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pedido_articulosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pedido_articulosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pedido_articulosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pedido_articulosMaxAggregateInputType
  }

  export type GetPedido_articulosAggregateType<T extends Pedido_articulosAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido_articulos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido_articulos[P]>
      : GetScalarType<T[P], AggregatePedido_articulos[P]>
  }




  export type pedido_articulosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pedido_articulosWhereInput
    orderBy?: pedido_articulosOrderByWithAggregationInput | pedido_articulosOrderByWithAggregationInput[]
    by: Pedido_articulosScalarFieldEnum[] | Pedido_articulosScalarFieldEnum
    having?: pedido_articulosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pedido_articulosCountAggregateInputType | true
    _avg?: Pedido_articulosAvgAggregateInputType
    _sum?: Pedido_articulosSumAggregateInputType
    _min?: Pedido_articulosMinAggregateInputType
    _max?: Pedido_articulosMaxAggregateInputType
  }

  export type Pedido_articulosGroupByOutputType = {
    pedido_id: number
    articulo_id: number
    cantidad: number
    _count: Pedido_articulosCountAggregateOutputType | null
    _avg: Pedido_articulosAvgAggregateOutputType | null
    _sum: Pedido_articulosSumAggregateOutputType | null
    _min: Pedido_articulosMinAggregateOutputType | null
    _max: Pedido_articulosMaxAggregateOutputType | null
  }

  type GetPedido_articulosGroupByPayload<T extends pedido_articulosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pedido_articulosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pedido_articulosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pedido_articulosGroupByOutputType[P]>
            : GetScalarType<T[P], Pedido_articulosGroupByOutputType[P]>
        }
      >
    >


  export type pedido_articulosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    articulo_id?: boolean
    cantidad?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_articulos"]>

  export type pedido_articulosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    articulo_id?: boolean
    cantidad?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_articulos"]>

  export type pedido_articulosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pedido_id?: boolean
    articulo_id?: boolean
    cantidad?: boolean
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido_articulos"]>

  export type pedido_articulosSelectScalar = {
    pedido_id?: boolean
    articulo_id?: boolean
    cantidad?: boolean
  }

  export type pedido_articulosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pedido_id" | "articulo_id" | "cantidad", ExtArgs["result"]["pedido_articulos"]>
  export type pedido_articulosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }
  export type pedido_articulosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }
  export type pedido_articulosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | pedidoDefaultArgs<ExtArgs>
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
  }

  export type $pedido_articulosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pedido_articulos"
    objects: {
      pedido: Prisma.$pedidoPayload<ExtArgs>
      articulo: Prisma.$articuloPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pedido_id: number
      articulo_id: number
      cantidad: number
    }, ExtArgs["result"]["pedido_articulos"]>
    composites: {}
  }

  type pedido_articulosGetPayload<S extends boolean | null | undefined | pedido_articulosDefaultArgs> = $Result.GetResult<Prisma.$pedido_articulosPayload, S>

  type pedido_articulosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pedido_articulosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pedido_articulosCountAggregateInputType | true
    }

  export interface pedido_articulosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pedido_articulos'], meta: { name: 'pedido_articulos' } }
    /**
     * Find zero or one Pedido_articulos that matches the filter.
     * @param {pedido_articulosFindUniqueArgs} args - Arguments to find a Pedido_articulos
     * @example
     * // Get one Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pedido_articulosFindUniqueArgs>(args: SelectSubset<T, pedido_articulosFindUniqueArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido_articulos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pedido_articulosFindUniqueOrThrowArgs} args - Arguments to find a Pedido_articulos
     * @example
     * // Get one Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pedido_articulosFindUniqueOrThrowArgs>(args: SelectSubset<T, pedido_articulosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_articulosFindFirstArgs} args - Arguments to find a Pedido_articulos
     * @example
     * // Get one Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pedido_articulosFindFirstArgs>(args?: SelectSubset<T, pedido_articulosFindFirstArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido_articulos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_articulosFindFirstOrThrowArgs} args - Arguments to find a Pedido_articulos
     * @example
     * // Get one Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pedido_articulosFindFirstOrThrowArgs>(args?: SelectSubset<T, pedido_articulosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedido_articulos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_articulosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.findMany()
     * 
     * // Get first 10 Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.findMany({ take: 10 })
     * 
     * // Only select the `pedido_id`
     * const pedido_articulosWithPedido_idOnly = await prisma.pedido_articulos.findMany({ select: { pedido_id: true } })
     * 
     */
    findMany<T extends pedido_articulosFindManyArgs>(args?: SelectSubset<T, pedido_articulosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido_articulos.
     * @param {pedido_articulosCreateArgs} args - Arguments to create a Pedido_articulos.
     * @example
     * // Create one Pedido_articulos
     * const Pedido_articulos = await prisma.pedido_articulos.create({
     *   data: {
     *     // ... data to create a Pedido_articulos
     *   }
     * })
     * 
     */
    create<T extends pedido_articulosCreateArgs>(args: SelectSubset<T, pedido_articulosCreateArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedido_articulos.
     * @param {pedido_articulosCreateManyArgs} args - Arguments to create many Pedido_articulos.
     * @example
     * // Create many Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pedido_articulosCreateManyArgs>(args?: SelectSubset<T, pedido_articulosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedido_articulos and returns the data saved in the database.
     * @param {pedido_articulosCreateManyAndReturnArgs} args - Arguments to create many Pedido_articulos.
     * @example
     * // Create many Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedido_articulos and only return the `pedido_id`
     * const pedido_articulosWithPedido_idOnly = await prisma.pedido_articulos.createManyAndReturn({
     *   select: { pedido_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pedido_articulosCreateManyAndReturnArgs>(args?: SelectSubset<T, pedido_articulosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido_articulos.
     * @param {pedido_articulosDeleteArgs} args - Arguments to delete one Pedido_articulos.
     * @example
     * // Delete one Pedido_articulos
     * const Pedido_articulos = await prisma.pedido_articulos.delete({
     *   where: {
     *     // ... filter to delete one Pedido_articulos
     *   }
     * })
     * 
     */
    delete<T extends pedido_articulosDeleteArgs>(args: SelectSubset<T, pedido_articulosDeleteArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido_articulos.
     * @param {pedido_articulosUpdateArgs} args - Arguments to update one Pedido_articulos.
     * @example
     * // Update one Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pedido_articulosUpdateArgs>(args: SelectSubset<T, pedido_articulosUpdateArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedido_articulos.
     * @param {pedido_articulosDeleteManyArgs} args - Arguments to filter Pedido_articulos to delete.
     * @example
     * // Delete a few Pedido_articulos
     * const { count } = await prisma.pedido_articulos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pedido_articulosDeleteManyArgs>(args?: SelectSubset<T, pedido_articulosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_articulosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pedido_articulosUpdateManyArgs>(args: SelectSubset<T, pedido_articulosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedido_articulos and returns the data updated in the database.
     * @param {pedido_articulosUpdateManyAndReturnArgs} args - Arguments to update many Pedido_articulos.
     * @example
     * // Update many Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedido_articulos and only return the `pedido_id`
     * const pedido_articulosWithPedido_idOnly = await prisma.pedido_articulos.updateManyAndReturn({
     *   select: { pedido_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pedido_articulosUpdateManyAndReturnArgs>(args: SelectSubset<T, pedido_articulosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido_articulos.
     * @param {pedido_articulosUpsertArgs} args - Arguments to update or create a Pedido_articulos.
     * @example
     * // Update or create a Pedido_articulos
     * const pedido_articulos = await prisma.pedido_articulos.upsert({
     *   create: {
     *     // ... data to create a Pedido_articulos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido_articulos we want to update
     *   }
     * })
     */
    upsert<T extends pedido_articulosUpsertArgs>(args: SelectSubset<T, pedido_articulosUpsertArgs<ExtArgs>>): Prisma__pedido_articulosClient<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedido_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_articulosCountArgs} args - Arguments to filter Pedido_articulos to count.
     * @example
     * // Count the number of Pedido_articulos
     * const count = await prisma.pedido_articulos.count({
     *   where: {
     *     // ... the filter for the Pedido_articulos we want to count
     *   }
     * })
    **/
    count<T extends pedido_articulosCountArgs>(
      args?: Subset<T, pedido_articulosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pedido_articulosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pedido_articulosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pedido_articulosAggregateArgs>(args: Subset<T, Pedido_articulosAggregateArgs>): Prisma.PrismaPromise<GetPedido_articulosAggregateType<T>>

    /**
     * Group by Pedido_articulos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pedido_articulosGroupByArgs} args - Group by arguments.
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
      T extends pedido_articulosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pedido_articulosGroupByArgs['orderBy'] }
        : { orderBy?: pedido_articulosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pedido_articulosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_articulosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pedido_articulos model
   */
  readonly fields: pedido_articulosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pedido_articulos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pedido_articulosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends pedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pedidoDefaultArgs<ExtArgs>>): Prisma__pedidoClient<$Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pedido_articulos model
   */
  interface pedido_articulosFieldRefs {
    readonly pedido_id: FieldRef<"pedido_articulos", 'Int'>
    readonly articulo_id: FieldRef<"pedido_articulos", 'Int'>
    readonly cantidad: FieldRef<"pedido_articulos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pedido_articulos findUnique
   */
  export type pedido_articulosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * Filter, which pedido_articulos to fetch.
     */
    where: pedido_articulosWhereUniqueInput
  }

  /**
   * pedido_articulos findUniqueOrThrow
   */
  export type pedido_articulosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * Filter, which pedido_articulos to fetch.
     */
    where: pedido_articulosWhereUniqueInput
  }

  /**
   * pedido_articulos findFirst
   */
  export type pedido_articulosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * Filter, which pedido_articulos to fetch.
     */
    where?: pedido_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_articulos to fetch.
     */
    orderBy?: pedido_articulosOrderByWithRelationInput | pedido_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_articulos.
     */
    cursor?: pedido_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_articulos.
     */
    distinct?: Pedido_articulosScalarFieldEnum | Pedido_articulosScalarFieldEnum[]
  }

  /**
   * pedido_articulos findFirstOrThrow
   */
  export type pedido_articulosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * Filter, which pedido_articulos to fetch.
     */
    where?: pedido_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_articulos to fetch.
     */
    orderBy?: pedido_articulosOrderByWithRelationInput | pedido_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pedido_articulos.
     */
    cursor?: pedido_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_articulos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pedido_articulos.
     */
    distinct?: Pedido_articulosScalarFieldEnum | Pedido_articulosScalarFieldEnum[]
  }

  /**
   * pedido_articulos findMany
   */
  export type pedido_articulosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * Filter, which pedido_articulos to fetch.
     */
    where?: pedido_articulosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pedido_articulos to fetch.
     */
    orderBy?: pedido_articulosOrderByWithRelationInput | pedido_articulosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pedido_articulos.
     */
    cursor?: pedido_articulosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pedido_articulos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pedido_articulos.
     */
    skip?: number
    distinct?: Pedido_articulosScalarFieldEnum | Pedido_articulosScalarFieldEnum[]
  }

  /**
   * pedido_articulos create
   */
  export type pedido_articulosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * The data needed to create a pedido_articulos.
     */
    data: XOR<pedido_articulosCreateInput, pedido_articulosUncheckedCreateInput>
  }

  /**
   * pedido_articulos createMany
   */
  export type pedido_articulosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pedido_articulos.
     */
    data: pedido_articulosCreateManyInput | pedido_articulosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pedido_articulos createManyAndReturn
   */
  export type pedido_articulosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * The data used to create many pedido_articulos.
     */
    data: pedido_articulosCreateManyInput | pedido_articulosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_articulos update
   */
  export type pedido_articulosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * The data needed to update a pedido_articulos.
     */
    data: XOR<pedido_articulosUpdateInput, pedido_articulosUncheckedUpdateInput>
    /**
     * Choose, which pedido_articulos to update.
     */
    where: pedido_articulosWhereUniqueInput
  }

  /**
   * pedido_articulos updateMany
   */
  export type pedido_articulosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pedido_articulos.
     */
    data: XOR<pedido_articulosUpdateManyMutationInput, pedido_articulosUncheckedUpdateManyInput>
    /**
     * Filter which pedido_articulos to update
     */
    where?: pedido_articulosWhereInput
    /**
     * Limit how many pedido_articulos to update.
     */
    limit?: number
  }

  /**
   * pedido_articulos updateManyAndReturn
   */
  export type pedido_articulosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * The data used to update pedido_articulos.
     */
    data: XOR<pedido_articulosUpdateManyMutationInput, pedido_articulosUncheckedUpdateManyInput>
    /**
     * Filter which pedido_articulos to update
     */
    where?: pedido_articulosWhereInput
    /**
     * Limit how many pedido_articulos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pedido_articulos upsert
   */
  export type pedido_articulosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * The filter to search for the pedido_articulos to update in case it exists.
     */
    where: pedido_articulosWhereUniqueInput
    /**
     * In case the pedido_articulos found by the `where` argument doesn't exist, create a new pedido_articulos with this data.
     */
    create: XOR<pedido_articulosCreateInput, pedido_articulosUncheckedCreateInput>
    /**
     * In case the pedido_articulos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pedido_articulosUpdateInput, pedido_articulosUncheckedUpdateInput>
  }

  /**
   * pedido_articulos delete
   */
  export type pedido_articulosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    /**
     * Filter which pedido_articulos to delete.
     */
    where: pedido_articulosWhereUniqueInput
  }

  /**
   * pedido_articulos deleteMany
   */
  export type pedido_articulosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pedido_articulos to delete
     */
    where?: pedido_articulosWhereInput
    /**
     * Limit how many pedido_articulos to delete.
     */
    limit?: number
  }

  /**
   * pedido_articulos without action
   */
  export type pedido_articulosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
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
    cant_piezas: number | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloSumAggregateOutputType = {
    id: number | null
    cant_piezas: number | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    cant_piezas: number | null
    plano_file: string | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    descripcion: string | null
    cant_piezas: number | null
    plano_file: string | null
    precio: number | null
    cte_ganancia: number | null
  }

  export type ArticuloCountAggregateOutputType = {
    id: number
    codigo: number
    descripcion: number
    cant_piezas: number
    plano_file: number
    precio: number
    cte_ganancia: number
    _all: number
  }


  export type ArticuloAvgAggregateInputType = {
    id?: true
    cant_piezas?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloSumAggregateInputType = {
    id?: true
    cant_piezas?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloMinAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    cant_piezas?: true
    plano_file?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloMaxAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    cant_piezas?: true
    plano_file?: true
    precio?: true
    cte_ganancia?: true
  }

  export type ArticuloCountAggregateInputType = {
    id?: true
    codigo?: true
    descripcion?: true
    cant_piezas?: true
    plano_file?: true
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
    codigo: string | null
    descripcion: string | null
    cant_piezas: number | null
    plano_file: string | null
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
    plano_file?: boolean
    precio?: boolean
    cte_ganancia?: boolean
    pedido_articulos?: boolean | articulo$pedido_articulosArgs<ExtArgs>
    articulo_piezas?: boolean | articulo$articulo_piezasArgs<ExtArgs>
    _count?: boolean | ArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo"]>

  export type articuloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cant_piezas?: boolean
    plano_file?: boolean
    precio?: boolean
    cte_ganancia?: boolean
  }, ExtArgs["result"]["articulo"]>

  export type articuloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cant_piezas?: boolean
    plano_file?: boolean
    precio?: boolean
    cte_ganancia?: boolean
  }, ExtArgs["result"]["articulo"]>

  export type articuloSelectScalar = {
    id?: boolean
    codigo?: boolean
    descripcion?: boolean
    cant_piezas?: boolean
    plano_file?: boolean
    precio?: boolean
    cte_ganancia?: boolean
  }

  export type articuloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "descripcion" | "cant_piezas" | "plano_file" | "precio" | "cte_ganancia", ExtArgs["result"]["articulo"]>
  export type articuloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido_articulos?: boolean | articulo$pedido_articulosArgs<ExtArgs>
    articulo_piezas?: boolean | articulo$articulo_piezasArgs<ExtArgs>
    _count?: boolean | ArticuloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type articuloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type articuloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $articuloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "articulo"
    objects: {
      pedido_articulos: Prisma.$pedido_articulosPayload<ExtArgs>[]
      articulo_piezas: Prisma.$articulo_piezasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string | null
      descripcion: string | null
      cant_piezas: number | null
      plano_file: string | null
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
     * Create many Articulos and returns the data saved in the database.
     * @param {articuloCreateManyAndReturnArgs} args - Arguments to create many Articulos.
     * @example
     * // Create many Articulos
     * const articulo = await prisma.articulo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articulos and only return the `id`
     * const articuloWithIdOnly = await prisma.articulo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends articuloCreateManyAndReturnArgs>(args?: SelectSubset<T, articuloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Articulos and returns the data updated in the database.
     * @param {articuloUpdateManyAndReturnArgs} args - Arguments to update many Articulos.
     * @example
     * // Update many Articulos
     * const articulo = await prisma.articulo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articulos and only return the `id`
     * const articuloWithIdOnly = await prisma.articulo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends articuloUpdateManyAndReturnArgs>(args: SelectSubset<T, articuloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articuloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    pedido_articulos<T extends articulo$pedido_articulosArgs<ExtArgs> = {}>(args?: Subset<T, articulo$pedido_articulosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pedido_articulosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly codigo: FieldRef<"articulo", 'String'>
    readonly descripcion: FieldRef<"articulo", 'String'>
    readonly cant_piezas: FieldRef<"articulo", 'Int'>
    readonly plano_file: FieldRef<"articulo", 'String'>
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
   * articulo createManyAndReturn
   */
  export type articuloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
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
   * articulo updateManyAndReturn
   */
  export type articuloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo
     */
    select?: articuloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articulo
     */
    omit?: articuloOmit<ExtArgs> | null
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
   * articulo.pedido_articulos
   */
  export type articulo$pedido_articulosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pedido_articulos
     */
    select?: pedido_articulosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pedido_articulos
     */
    omit?: pedido_articulosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pedido_articulosInclude<ExtArgs> | null
    where?: pedido_articulosWhereInput
    orderBy?: pedido_articulosOrderByWithRelationInput | pedido_articulosOrderByWithRelationInput[]
    cursor?: pedido_articulosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Pedido_articulosScalarFieldEnum | Pedido_articulosScalarFieldEnum[]
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

  export type articulo_piezasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    articulo_id?: boolean
    pieza_id?: boolean
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
    pieza?: boolean | piezaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articulo_piezas"]>

  export type articulo_piezasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  export type articulo_piezasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo?: boolean | articuloDefaultArgs<ExtArgs>
    pieza?: boolean | piezaDefaultArgs<ExtArgs>
  }
  export type articulo_piezasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
     * Create many Articulo_piezas and returns the data saved in the database.
     * @param {articulo_piezasCreateManyAndReturnArgs} args - Arguments to create many Articulo_piezas.
     * @example
     * // Create many Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articulo_piezas and only return the `articulo_id`
     * const articulo_piezasWithArticulo_idOnly = await prisma.articulo_piezas.createManyAndReturn({
     *   select: { articulo_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends articulo_piezasCreateManyAndReturnArgs>(args?: SelectSubset<T, articulo_piezasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Articulo_piezas and returns the data updated in the database.
     * @param {articulo_piezasUpdateManyAndReturnArgs} args - Arguments to update many Articulo_piezas.
     * @example
     * // Update many Articulo_piezas
     * const articulo_piezas = await prisma.articulo_piezas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articulo_piezas and only return the `articulo_id`
     * const articulo_piezasWithArticulo_idOnly = await prisma.articulo_piezas.updateManyAndReturn({
     *   select: { articulo_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends articulo_piezasUpdateManyAndReturnArgs>(args: SelectSubset<T, articulo_piezasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$articulo_piezasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
   * articulo_piezas createManyAndReturn
   */
  export type articulo_piezasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
    /**
     * The data used to create many articulo_piezas.
     */
    data: articulo_piezasCreateManyInput | articulo_piezasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasIncludeCreateManyAndReturn<ExtArgs> | null
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
   * articulo_piezas updateManyAndReturn
   */
  export type articulo_piezasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the articulo_piezas
     */
    select?: articulo_piezasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the articulo_piezas
     */
    omit?: articulo_piezasOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: articulo_piezasIncludeUpdateManyAndReturn<ExtArgs> | null
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
    plano_pleg_DWG_file: string | null
    plano_pleg_SOLID_file: string | null
    plano_laser_DXF_file: string | null
    cte_ganancia: number | null
  }

  export type PiezaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio_mat_prima: number | null
    plano_pleg_DWG_file: string | null
    plano_pleg_SOLID_file: string | null
    plano_laser_DXF_file: string | null
    cte_ganancia: number | null
  }

  export type PiezaCountAggregateOutputType = {
    id: number
    nombre: number
    precio_mat_prima: number
    plano_pleg_DWG_file: number
    plano_pleg_SOLID_file: number
    plano_laser_DXF_file: number
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
    plano_pleg_DWG_file?: true
    plano_pleg_SOLID_file?: true
    plano_laser_DXF_file?: true
    cte_ganancia?: true
  }

  export type PiezaMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio_mat_prima?: true
    plano_pleg_DWG_file?: true
    plano_pleg_SOLID_file?: true
    plano_laser_DXF_file?: true
    cte_ganancia?: true
  }

  export type PiezaCountAggregateInputType = {
    id?: true
    nombre?: true
    precio_mat_prima?: true
    plano_pleg_DWG_file?: true
    plano_pleg_SOLID_file?: true
    plano_laser_DXF_file?: true
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
    plano_pleg_DWG_file: string | null
    plano_pleg_SOLID_file: string | null
    plano_laser_DXF_file: string | null
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
    plano_pleg_DWG_file?: boolean
    plano_pleg_SOLID_file?: boolean
    plano_laser_DXF_file?: boolean
    cte_ganancia?: boolean
    articulo_piezas?: boolean | pieza$articulo_piezasArgs<ExtArgs>
    _count?: boolean | PiezaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pieza"]>

  export type piezaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio_mat_prima?: boolean
    plano_pleg_DWG_file?: boolean
    plano_pleg_SOLID_file?: boolean
    plano_laser_DXF_file?: boolean
    cte_ganancia?: boolean
  }, ExtArgs["result"]["pieza"]>

  export type piezaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio_mat_prima?: boolean
    plano_pleg_DWG_file?: boolean
    plano_pleg_SOLID_file?: boolean
    plano_laser_DXF_file?: boolean
    cte_ganancia?: boolean
  }, ExtArgs["result"]["pieza"]>

  export type piezaSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio_mat_prima?: boolean
    plano_pleg_DWG_file?: boolean
    plano_pleg_SOLID_file?: boolean
    plano_laser_DXF_file?: boolean
    cte_ganancia?: boolean
  }

  export type piezaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio_mat_prima" | "plano_pleg_DWG_file" | "plano_pleg_SOLID_file" | "plano_laser_DXF_file" | "cte_ganancia", ExtArgs["result"]["pieza"]>
  export type piezaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articulo_piezas?: boolean | pieza$articulo_piezasArgs<ExtArgs>
    _count?: boolean | PiezaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type piezaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type piezaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $piezaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pieza"
    objects: {
      articulo_piezas: Prisma.$articulo_piezasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string | null
      precio_mat_prima: number | null
      plano_pleg_DWG_file: string | null
      plano_pleg_SOLID_file: string | null
      plano_laser_DXF_file: string | null
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
     * Create many Piezas and returns the data saved in the database.
     * @param {piezaCreateManyAndReturnArgs} args - Arguments to create many Piezas.
     * @example
     * // Create many Piezas
     * const pieza = await prisma.pieza.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Piezas and only return the `id`
     * const piezaWithIdOnly = await prisma.pieza.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends piezaCreateManyAndReturnArgs>(args?: SelectSubset<T, piezaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Piezas and returns the data updated in the database.
     * @param {piezaUpdateManyAndReturnArgs} args - Arguments to update many Piezas.
     * @example
     * // Update many Piezas
     * const pieza = await prisma.pieza.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Piezas and only return the `id`
     * const piezaWithIdOnly = await prisma.pieza.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends piezaUpdateManyAndReturnArgs>(args: SelectSubset<T, piezaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piezaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    readonly plano_pleg_DWG_file: FieldRef<"pieza", 'String'>
    readonly plano_pleg_SOLID_file: FieldRef<"pieza", 'String'>
    readonly plano_laser_DXF_file: FieldRef<"pieza", 'String'>
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
   * pieza createManyAndReturn
   */
  export type piezaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
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
   * pieza updateManyAndReturn
   */
  export type piezaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pieza
     */
    select?: piezaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pieza
     */
    omit?: piezaOmit<ExtArgs> | null
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
    apellido: 'apellido',
    rol: 'rol'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Users_pedidosScalarFieldEnum: {
    user_id: 'user_id',
    pedido_id: 'pedido_id'
  };

  export type Users_pedidosScalarFieldEnum = (typeof Users_pedidosScalarFieldEnum)[keyof typeof Users_pedidosScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    presupuesto: 'presupuesto',
    estado: 'estado'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const Pedido_articulosScalarFieldEnum: {
    pedido_id: 'pedido_id',
    articulo_id: 'articulo_id',
    cantidad: 'cantidad'
  };

  export type Pedido_articulosScalarFieldEnum = (typeof Pedido_articulosScalarFieldEnum)[keyof typeof Pedido_articulosScalarFieldEnum]


  export const ArticuloScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    descripcion: 'descripcion',
    cant_piezas: 'cant_piezas',
    plano_file: 'plano_file',
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
    plano_pleg_DWG_file: 'plano_pleg_DWG_file',
    plano_pleg_SOLID_file: 'plano_pleg_SOLID_file',
    plano_laser_DXF_file: 'plano_laser_DXF_file',
    cte_ganancia: 'cte_ganancia'
  };

  export type PiezaScalarFieldEnum = (typeof PiezaScalarFieldEnum)[keyof typeof PiezaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    rol?: StringFilter<"users"> | string
    users_pedidos?: Users_pedidosListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    rol?: SortOrder
    users_pedidos?: users_pedidosOrderByRelationAggregateInput
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
    rol?: StringFilter<"users"> | string
    users_pedidos?: Users_pedidosListRelationFilter
  }, "id" | "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrderInput | SortOrder
    apellido?: SortOrderInput | SortOrder
    rol?: SortOrder
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
    rol?: StringWithAggregatesFilter<"users"> | string
  }

  export type users_pedidosWhereInput = {
    AND?: users_pedidosWhereInput | users_pedidosWhereInput[]
    OR?: users_pedidosWhereInput[]
    NOT?: users_pedidosWhereInput | users_pedidosWhereInput[]
    user_id?: IntFilter<"users_pedidos"> | number
    pedido_id?: IntFilter<"users_pedidos"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }

  export type users_pedidosOrderByWithRelationInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
    users?: usersOrderByWithRelationInput
    pedido?: pedidoOrderByWithRelationInput
  }

  export type users_pedidosWhereUniqueInput = Prisma.AtLeast<{
    user_id_pedido_id?: users_pedidosUser_idPedido_idCompoundUniqueInput
    AND?: users_pedidosWhereInput | users_pedidosWhereInput[]
    OR?: users_pedidosWhereInput[]
    NOT?: users_pedidosWhereInput | users_pedidosWhereInput[]
    user_id?: IntFilter<"users_pedidos"> | number
    pedido_id?: IntFilter<"users_pedidos"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
  }, "user_id_pedido_id">

  export type users_pedidosOrderByWithAggregationInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
    _count?: users_pedidosCountOrderByAggregateInput
    _avg?: users_pedidosAvgOrderByAggregateInput
    _max?: users_pedidosMaxOrderByAggregateInput
    _min?: users_pedidosMinOrderByAggregateInput
    _sum?: users_pedidosSumOrderByAggregateInput
  }

  export type users_pedidosScalarWhereWithAggregatesInput = {
    AND?: users_pedidosScalarWhereWithAggregatesInput | users_pedidosScalarWhereWithAggregatesInput[]
    OR?: users_pedidosScalarWhereWithAggregatesInput[]
    NOT?: users_pedidosScalarWhereWithAggregatesInput | users_pedidosScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users_pedidos"> | number
    pedido_id?: IntWithAggregatesFilter<"users_pedidos"> | number
  }

  export type pedidoWhereInput = {
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    id?: IntFilter<"pedido"> | number
    codigo?: StringNullableFilter<"pedido"> | string | null
    presupuesto?: IntNullableFilter<"pedido"> | number | null
    estado?: StringFilter<"pedido"> | string
    user_pedidos?: Users_pedidosListRelationFilter
    pedido_articulos?: Pedido_articulosListRelationFilter
  }

  export type pedidoOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrderInput | SortOrder
    presupuesto?: SortOrderInput | SortOrder
    estado?: SortOrder
    user_pedidos?: users_pedidosOrderByRelationAggregateInput
    pedido_articulos?: pedido_articulosOrderByRelationAggregateInput
  }

  export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pedidoWhereInput | pedidoWhereInput[]
    OR?: pedidoWhereInput[]
    NOT?: pedidoWhereInput | pedidoWhereInput[]
    codigo?: StringNullableFilter<"pedido"> | string | null
    presupuesto?: IntNullableFilter<"pedido"> | number | null
    estado?: StringFilter<"pedido"> | string
    user_pedidos?: Users_pedidosListRelationFilter
    pedido_articulos?: Pedido_articulosListRelationFilter
  }, "id" | "id">

  export type pedidoOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrderInput | SortOrder
    presupuesto?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: pedidoCountOrderByAggregateInput
    _avg?: pedidoAvgOrderByAggregateInput
    _max?: pedidoMaxOrderByAggregateInput
    _min?: pedidoMinOrderByAggregateInput
    _sum?: pedidoSumOrderByAggregateInput
  }

  export type pedidoScalarWhereWithAggregatesInput = {
    AND?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    OR?: pedidoScalarWhereWithAggregatesInput[]
    NOT?: pedidoScalarWhereWithAggregatesInput | pedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pedido"> | number
    codigo?: StringNullableWithAggregatesFilter<"pedido"> | string | null
    presupuesto?: IntNullableWithAggregatesFilter<"pedido"> | number | null
    estado?: StringWithAggregatesFilter<"pedido"> | string
  }

  export type pedido_articulosWhereInput = {
    AND?: pedido_articulosWhereInput | pedido_articulosWhereInput[]
    OR?: pedido_articulosWhereInput[]
    NOT?: pedido_articulosWhereInput | pedido_articulosWhereInput[]
    pedido_id?: IntFilter<"pedido_articulos"> | number
    articulo_id?: IntFilter<"pedido_articulos"> | number
    cantidad?: IntFilter<"pedido_articulos"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    articulo?: XOR<ArticuloScalarRelationFilter, articuloWhereInput>
  }

  export type pedido_articulosOrderByWithRelationInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
    pedido?: pedidoOrderByWithRelationInput
    articulo?: articuloOrderByWithRelationInput
  }

  export type pedido_articulosWhereUniqueInput = Prisma.AtLeast<{
    pedido_id_articulo_id?: pedido_articulosPedido_idArticulo_idCompoundUniqueInput
    AND?: pedido_articulosWhereInput | pedido_articulosWhereInput[]
    OR?: pedido_articulosWhereInput[]
    NOT?: pedido_articulosWhereInput | pedido_articulosWhereInput[]
    pedido_id?: IntFilter<"pedido_articulos"> | number
    articulo_id?: IntFilter<"pedido_articulos"> | number
    cantidad?: IntFilter<"pedido_articulos"> | number
    pedido?: XOR<PedidoScalarRelationFilter, pedidoWhereInput>
    articulo?: XOR<ArticuloScalarRelationFilter, articuloWhereInput>
  }, "pedido_id_articulo_id">

  export type pedido_articulosOrderByWithAggregationInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
    _count?: pedido_articulosCountOrderByAggregateInput
    _avg?: pedido_articulosAvgOrderByAggregateInput
    _max?: pedido_articulosMaxOrderByAggregateInput
    _min?: pedido_articulosMinOrderByAggregateInput
    _sum?: pedido_articulosSumOrderByAggregateInput
  }

  export type pedido_articulosScalarWhereWithAggregatesInput = {
    AND?: pedido_articulosScalarWhereWithAggregatesInput | pedido_articulosScalarWhereWithAggregatesInput[]
    OR?: pedido_articulosScalarWhereWithAggregatesInput[]
    NOT?: pedido_articulosScalarWhereWithAggregatesInput | pedido_articulosScalarWhereWithAggregatesInput[]
    pedido_id?: IntWithAggregatesFilter<"pedido_articulos"> | number
    articulo_id?: IntWithAggregatesFilter<"pedido_articulos"> | number
    cantidad?: IntWithAggregatesFilter<"pedido_articulos"> | number
  }

  export type articuloWhereInput = {
    AND?: articuloWhereInput | articuloWhereInput[]
    OR?: articuloWhereInput[]
    NOT?: articuloWhereInput | articuloWhereInput[]
    id?: IntFilter<"articulo"> | number
    codigo?: StringNullableFilter<"articulo"> | string | null
    descripcion?: StringNullableFilter<"articulo"> | string | null
    cant_piezas?: IntNullableFilter<"articulo"> | number | null
    plano_file?: StringNullableFilter<"articulo"> | string | null
    precio?: IntNullableFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableFilter<"articulo"> | number | null
    pedido_articulos?: Pedido_articulosListRelationFilter
    articulo_piezas?: Articulo_piezasListRelationFilter
  }

  export type articuloOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    cant_piezas?: SortOrderInput | SortOrder
    plano_file?: SortOrderInput | SortOrder
    precio?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    pedido_articulos?: pedido_articulosOrderByRelationAggregateInput
    articulo_piezas?: articulo_piezasOrderByRelationAggregateInput
  }

  export type articuloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: articuloWhereInput | articuloWhereInput[]
    OR?: articuloWhereInput[]
    NOT?: articuloWhereInput | articuloWhereInput[]
    codigo?: StringNullableFilter<"articulo"> | string | null
    descripcion?: StringNullableFilter<"articulo"> | string | null
    cant_piezas?: IntNullableFilter<"articulo"> | number | null
    plano_file?: StringNullableFilter<"articulo"> | string | null
    precio?: IntNullableFilter<"articulo"> | number | null
    cte_ganancia?: IntNullableFilter<"articulo"> | number | null
    pedido_articulos?: Pedido_articulosListRelationFilter
    articulo_piezas?: Articulo_piezasListRelationFilter
  }, "id" | "id">

  export type articuloOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    cant_piezas?: SortOrderInput | SortOrder
    plano_file?: SortOrderInput | SortOrder
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
    codigo?: StringNullableWithAggregatesFilter<"articulo"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"articulo"> | string | null
    cant_piezas?: IntNullableWithAggregatesFilter<"articulo"> | number | null
    plano_file?: StringNullableWithAggregatesFilter<"articulo"> | string | null
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
    plano_pleg_DWG_file?: StringNullableFilter<"pieza"> | string | null
    plano_pleg_SOLID_file?: StringNullableFilter<"pieza"> | string | null
    plano_laser_DXF_file?: StringNullableFilter<"pieza"> | string | null
    cte_ganancia?: IntNullableFilter<"pieza"> | number | null
    articulo_piezas?: Articulo_piezasListRelationFilter
  }

  export type piezaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio_mat_prima?: SortOrderInput | SortOrder
    plano_pleg_DWG_file?: SortOrderInput | SortOrder
    plano_pleg_SOLID_file?: SortOrderInput | SortOrder
    plano_laser_DXF_file?: SortOrderInput | SortOrder
    cte_ganancia?: SortOrderInput | SortOrder
    articulo_piezas?: articulo_piezasOrderByRelationAggregateInput
  }

  export type piezaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: piezaWhereInput | piezaWhereInput[]
    OR?: piezaWhereInput[]
    NOT?: piezaWhereInput | piezaWhereInput[]
    nombre?: StringNullableFilter<"pieza"> | string | null
    precio_mat_prima?: IntNullableFilter<"pieza"> | number | null
    plano_pleg_DWG_file?: StringNullableFilter<"pieza"> | string | null
    plano_pleg_SOLID_file?: StringNullableFilter<"pieza"> | string | null
    plano_laser_DXF_file?: StringNullableFilter<"pieza"> | string | null
    cte_ganancia?: IntNullableFilter<"pieza"> | number | null
    articulo_piezas?: Articulo_piezasListRelationFilter
  }, "id" | "id">

  export type piezaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrderInput | SortOrder
    precio_mat_prima?: SortOrderInput | SortOrder
    plano_pleg_DWG_file?: SortOrderInput | SortOrder
    plano_pleg_SOLID_file?: SortOrderInput | SortOrder
    plano_laser_DXF_file?: SortOrderInput | SortOrder
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
    plano_pleg_DWG_file?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    plano_pleg_SOLID_file?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    plano_laser_DXF_file?: StringNullableWithAggregatesFilter<"pieza"> | string | null
    cte_ganancia?: IntNullableWithAggregatesFilter<"pieza"> | number | null
  }

  export type usersCreateInput = {
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    rol?: string
    users_pedidos?: users_pedidosCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    rol?: string
    users_pedidos?: users_pedidosUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    users_pedidos?: users_pedidosUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
    users_pedidos?: users_pedidosUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    rol?: string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type users_pedidosCreateInput = {
    users: usersCreateNestedOneWithoutUsers_pedidosInput
    pedido: pedidoCreateNestedOneWithoutUser_pedidosInput
  }

  export type users_pedidosUncheckedCreateInput = {
    user_id: number
    pedido_id: number
  }

  export type users_pedidosUpdateInput = {
    users?: usersUpdateOneRequiredWithoutUsers_pedidosNestedInput
    pedido?: pedidoUpdateOneRequiredWithoutUser_pedidosNestedInput
  }

  export type users_pedidosUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_pedidosCreateManyInput = {
    user_id: number
    pedido_id: number
  }

  export type users_pedidosUpdateManyMutationInput = {

  }

  export type users_pedidosUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    pedido_id?: IntFieldUpdateOperationsInput | number
  }

  export type pedidoCreateInput = {
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
    user_pedidos?: users_pedidosCreateNestedManyWithoutPedidoInput
    pedido_articulos?: pedido_articulosCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateInput = {
    id?: number
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
    user_pedidos?: users_pedidosUncheckedCreateNestedManyWithoutPedidoInput
    pedido_articulos?: pedido_articulosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUpdateInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    user_pedidos?: users_pedidosUpdateManyWithoutPedidoNestedInput
    pedido_articulos?: pedido_articulosUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    user_pedidos?: users_pedidosUncheckedUpdateManyWithoutPedidoNestedInput
    pedido_articulos?: pedido_articulosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoCreateManyInput = {
    id?: number
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
  }

  export type pedidoUpdateManyMutationInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type pedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type pedido_articulosCreateInput = {
    cantidad?: number
    pedido: pedidoCreateNestedOneWithoutPedido_articulosInput
    articulo: articuloCreateNestedOneWithoutPedido_articulosInput
  }

  export type pedido_articulosUncheckedCreateInput = {
    pedido_id: number
    articulo_id: number
    cantidad?: number
  }

  export type pedido_articulosUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    pedido?: pedidoUpdateOneRequiredWithoutPedido_articulosNestedInput
    articulo?: articuloUpdateOneRequiredWithoutPedido_articulosNestedInput
  }

  export type pedido_articulosUncheckedUpdateInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    articulo_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_articulosCreateManyInput = {
    pedido_id: number
    articulo_id: number
    cantidad?: number
  }

  export type pedido_articulosUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_articulosUncheckedUpdateManyInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    articulo_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type articuloCreateInput = {
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    pedido_articulos?: pedido_articulosCreateNestedManyWithoutArticuloInput
    articulo_piezas?: articulo_piezasCreateNestedManyWithoutArticuloInput
  }

  export type articuloUncheckedCreateInput = {
    id?: number
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    pedido_articulos?: pedido_articulosUncheckedCreateNestedManyWithoutArticuloInput
    articulo_piezas?: articulo_piezasUncheckedCreateNestedManyWithoutArticuloInput
  }

  export type articuloUpdateInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    pedido_articulos?: pedido_articulosUpdateManyWithoutArticuloNestedInput
    articulo_piezas?: articulo_piezasUpdateManyWithoutArticuloNestedInput
  }

  export type articuloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    pedido_articulos?: pedido_articulosUncheckedUpdateManyWithoutArticuloNestedInput
    articulo_piezas?: articulo_piezasUncheckedUpdateManyWithoutArticuloNestedInput
  }

  export type articuloCreateManyInput = {
    id?: number
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
  }

  export type articuloUpdateManyMutationInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type articuloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
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
    plano_pleg_DWG_file?: string | null
    plano_pleg_SOLID_file?: string | null
    plano_laser_DXF_file?: string | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasCreateNestedManyWithoutPiezaInput
  }

  export type piezaUncheckedCreateInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG_file?: string | null
    plano_pleg_SOLID_file?: string | null
    plano_laser_DXF_file?: string | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasUncheckedCreateNestedManyWithoutPiezaInput
  }

  export type piezaUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF_file?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUpdateManyWithoutPiezaNestedInput
  }

  export type piezaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF_file?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUncheckedUpdateManyWithoutPiezaNestedInput
  }

  export type piezaCreateManyInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG_file?: string | null
    plano_pleg_SOLID_file?: string | null
    plano_laser_DXF_file?: string | null
    cte_ganancia?: number | null
  }

  export type piezaUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF_file?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF_file?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Users_pedidosListRelationFilter = {
    every?: users_pedidosWhereInput
    some?: users_pedidosWhereInput
    none?: users_pedidosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type users_pedidosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
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
    rol?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    rol?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type PedidoScalarRelationFilter = {
    is?: pedidoWhereInput
    isNot?: pedidoWhereInput
  }

  export type users_pedidosUser_idPedido_idCompoundUniqueInput = {
    user_id: number
    pedido_id: number
  }

  export type users_pedidosCountOrderByAggregateInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type users_pedidosAvgOrderByAggregateInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type users_pedidosMaxOrderByAggregateInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type users_pedidosMinOrderByAggregateInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type users_pedidosSumOrderByAggregateInput = {
    user_id?: SortOrder
    pedido_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Pedido_articulosListRelationFilter = {
    every?: pedido_articulosWhereInput
    some?: pedido_articulosWhereInput
    none?: pedido_articulosWhereInput
  }

  export type pedido_articulosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pedidoCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    presupuesto?: SortOrder
    estado?: SortOrder
  }

  export type pedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    presupuesto?: SortOrder
  }

  export type pedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    presupuesto?: SortOrder
    estado?: SortOrder
  }

  export type pedidoMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    presupuesto?: SortOrder
    estado?: SortOrder
  }

  export type pedidoSumOrderByAggregateInput = {
    id?: SortOrder
    presupuesto?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type ArticuloScalarRelationFilter = {
    is?: articuloWhereInput
    isNot?: articuloWhereInput
  }

  export type pedido_articulosPedido_idArticulo_idCompoundUniqueInput = {
    pedido_id: number
    articulo_id: number
  }

  export type pedido_articulosCountOrderByAggregateInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
  }

  export type pedido_articulosAvgOrderByAggregateInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
  }

  export type pedido_articulosMaxOrderByAggregateInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
  }

  export type pedido_articulosMinOrderByAggregateInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
  }

  export type pedido_articulosSumOrderByAggregateInput = {
    pedido_id?: SortOrder
    articulo_id?: SortOrder
    cantidad?: SortOrder
  }

  export type Articulo_piezasListRelationFilter = {
    every?: articulo_piezasWhereInput
    some?: articulo_piezasWhereInput
    none?: articulo_piezasWhereInput
  }

  export type articulo_piezasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articuloCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cant_piezas?: SortOrder
    plano_file?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloAvgOrderByAggregateInput = {
    id?: SortOrder
    cant_piezas?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cant_piezas?: SortOrder
    plano_file?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    descripcion?: SortOrder
    cant_piezas?: SortOrder
    plano_file?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type articuloSumOrderByAggregateInput = {
    id?: SortOrder
    cant_piezas?: SortOrder
    precio?: SortOrder
    cte_ganancia?: SortOrder
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

  export type piezaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_mat_prima?: SortOrder
    plano_pleg_DWG_file?: SortOrder
    plano_pleg_SOLID_file?: SortOrder
    plano_laser_DXF_file?: SortOrder
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
    plano_pleg_DWG_file?: SortOrder
    plano_pleg_SOLID_file?: SortOrder
    plano_laser_DXF_file?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type piezaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio_mat_prima?: SortOrder
    plano_pleg_DWG_file?: SortOrder
    plano_pleg_SOLID_file?: SortOrder
    plano_laser_DXF_file?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type piezaSumOrderByAggregateInput = {
    id?: SortOrder
    precio_mat_prima?: SortOrder
    cte_ganancia?: SortOrder
  }

  export type users_pedidosCreateNestedManyWithoutUsersInput = {
    create?: XOR<users_pedidosCreateWithoutUsersInput, users_pedidosUncheckedCreateWithoutUsersInput> | users_pedidosCreateWithoutUsersInput[] | users_pedidosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutUsersInput | users_pedidosCreateOrConnectWithoutUsersInput[]
    createMany?: users_pedidosCreateManyUsersInputEnvelope
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
  }

  export type users_pedidosUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<users_pedidosCreateWithoutUsersInput, users_pedidosUncheckedCreateWithoutUsersInput> | users_pedidosCreateWithoutUsersInput[] | users_pedidosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutUsersInput | users_pedidosCreateOrConnectWithoutUsersInput[]
    createMany?: users_pedidosCreateManyUsersInputEnvelope
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type users_pedidosUpdateManyWithoutUsersNestedInput = {
    create?: XOR<users_pedidosCreateWithoutUsersInput, users_pedidosUncheckedCreateWithoutUsersInput> | users_pedidosCreateWithoutUsersInput[] | users_pedidosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutUsersInput | users_pedidosCreateOrConnectWithoutUsersInput[]
    upsert?: users_pedidosUpsertWithWhereUniqueWithoutUsersInput | users_pedidosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: users_pedidosCreateManyUsersInputEnvelope
    set?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    disconnect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    delete?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    update?: users_pedidosUpdateWithWhereUniqueWithoutUsersInput | users_pedidosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: users_pedidosUpdateManyWithWhereWithoutUsersInput | users_pedidosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: users_pedidosScalarWhereInput | users_pedidosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type users_pedidosUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<users_pedidosCreateWithoutUsersInput, users_pedidosUncheckedCreateWithoutUsersInput> | users_pedidosCreateWithoutUsersInput[] | users_pedidosUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutUsersInput | users_pedidosCreateOrConnectWithoutUsersInput[]
    upsert?: users_pedidosUpsertWithWhereUniqueWithoutUsersInput | users_pedidosUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: users_pedidosCreateManyUsersInputEnvelope
    set?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    disconnect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    delete?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    update?: users_pedidosUpdateWithWhereUniqueWithoutUsersInput | users_pedidosUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: users_pedidosUpdateManyWithWhereWithoutUsersInput | users_pedidosUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: users_pedidosScalarWhereInput | users_pedidosScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUsers_pedidosInput = {
    create?: XOR<usersCreateWithoutUsers_pedidosInput, usersUncheckedCreateWithoutUsers_pedidosInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_pedidosInput
    connect?: usersWhereUniqueInput
  }

  export type pedidoCreateNestedOneWithoutUser_pedidosInput = {
    create?: XOR<pedidoCreateWithoutUser_pedidosInput, pedidoUncheckedCreateWithoutUser_pedidosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutUser_pedidosInput
    connect?: pedidoWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutUsers_pedidosNestedInput = {
    create?: XOR<usersCreateWithoutUsers_pedidosInput, usersUncheckedCreateWithoutUsers_pedidosInput>
    connectOrCreate?: usersCreateOrConnectWithoutUsers_pedidosInput
    upsert?: usersUpsertWithoutUsers_pedidosInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUsers_pedidosInput, usersUpdateWithoutUsers_pedidosInput>, usersUncheckedUpdateWithoutUsers_pedidosInput>
  }

  export type pedidoUpdateOneRequiredWithoutUser_pedidosNestedInput = {
    create?: XOR<pedidoCreateWithoutUser_pedidosInput, pedidoUncheckedCreateWithoutUser_pedidosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutUser_pedidosInput
    upsert?: pedidoUpsertWithoutUser_pedidosInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutUser_pedidosInput, pedidoUpdateWithoutUser_pedidosInput>, pedidoUncheckedUpdateWithoutUser_pedidosInput>
  }

  export type users_pedidosCreateNestedManyWithoutPedidoInput = {
    create?: XOR<users_pedidosCreateWithoutPedidoInput, users_pedidosUncheckedCreateWithoutPedidoInput> | users_pedidosCreateWithoutPedidoInput[] | users_pedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutPedidoInput | users_pedidosCreateOrConnectWithoutPedidoInput[]
    createMany?: users_pedidosCreateManyPedidoInputEnvelope
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
  }

  export type pedido_articulosCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_articulosCreateWithoutPedidoInput, pedido_articulosUncheckedCreateWithoutPedidoInput> | pedido_articulosCreateWithoutPedidoInput[] | pedido_articulosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutPedidoInput | pedido_articulosCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_articulosCreateManyPedidoInputEnvelope
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
  }

  export type users_pedidosUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<users_pedidosCreateWithoutPedidoInput, users_pedidosUncheckedCreateWithoutPedidoInput> | users_pedidosCreateWithoutPedidoInput[] | users_pedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutPedidoInput | users_pedidosCreateOrConnectWithoutPedidoInput[]
    createMany?: users_pedidosCreateManyPedidoInputEnvelope
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
  }

  export type pedido_articulosUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<pedido_articulosCreateWithoutPedidoInput, pedido_articulosUncheckedCreateWithoutPedidoInput> | pedido_articulosCreateWithoutPedidoInput[] | pedido_articulosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutPedidoInput | pedido_articulosCreateOrConnectWithoutPedidoInput[]
    createMany?: pedido_articulosCreateManyPedidoInputEnvelope
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type users_pedidosUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<users_pedidosCreateWithoutPedidoInput, users_pedidosUncheckedCreateWithoutPedidoInput> | users_pedidosCreateWithoutPedidoInput[] | users_pedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutPedidoInput | users_pedidosCreateOrConnectWithoutPedidoInput[]
    upsert?: users_pedidosUpsertWithWhereUniqueWithoutPedidoInput | users_pedidosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: users_pedidosCreateManyPedidoInputEnvelope
    set?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    disconnect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    delete?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    update?: users_pedidosUpdateWithWhereUniqueWithoutPedidoInput | users_pedidosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: users_pedidosUpdateManyWithWhereWithoutPedidoInput | users_pedidosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: users_pedidosScalarWhereInput | users_pedidosScalarWhereInput[]
  }

  export type pedido_articulosUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_articulosCreateWithoutPedidoInput, pedido_articulosUncheckedCreateWithoutPedidoInput> | pedido_articulosCreateWithoutPedidoInput[] | pedido_articulosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutPedidoInput | pedido_articulosCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_articulosUpsertWithWhereUniqueWithoutPedidoInput | pedido_articulosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_articulosCreateManyPedidoInputEnvelope
    set?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    disconnect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    delete?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    update?: pedido_articulosUpdateWithWhereUniqueWithoutPedidoInput | pedido_articulosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_articulosUpdateManyWithWhereWithoutPedidoInput | pedido_articulosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_articulosScalarWhereInput | pedido_articulosScalarWhereInput[]
  }

  export type users_pedidosUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<users_pedidosCreateWithoutPedidoInput, users_pedidosUncheckedCreateWithoutPedidoInput> | users_pedidosCreateWithoutPedidoInput[] | users_pedidosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: users_pedidosCreateOrConnectWithoutPedidoInput | users_pedidosCreateOrConnectWithoutPedidoInput[]
    upsert?: users_pedidosUpsertWithWhereUniqueWithoutPedidoInput | users_pedidosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: users_pedidosCreateManyPedidoInputEnvelope
    set?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    disconnect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    delete?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    connect?: users_pedidosWhereUniqueInput | users_pedidosWhereUniqueInput[]
    update?: users_pedidosUpdateWithWhereUniqueWithoutPedidoInput | users_pedidosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: users_pedidosUpdateManyWithWhereWithoutPedidoInput | users_pedidosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: users_pedidosScalarWhereInput | users_pedidosScalarWhereInput[]
  }

  export type pedido_articulosUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<pedido_articulosCreateWithoutPedidoInput, pedido_articulosUncheckedCreateWithoutPedidoInput> | pedido_articulosCreateWithoutPedidoInput[] | pedido_articulosUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutPedidoInput | pedido_articulosCreateOrConnectWithoutPedidoInput[]
    upsert?: pedido_articulosUpsertWithWhereUniqueWithoutPedidoInput | pedido_articulosUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: pedido_articulosCreateManyPedidoInputEnvelope
    set?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    disconnect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    delete?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    update?: pedido_articulosUpdateWithWhereUniqueWithoutPedidoInput | pedido_articulosUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: pedido_articulosUpdateManyWithWhereWithoutPedidoInput | pedido_articulosUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: pedido_articulosScalarWhereInput | pedido_articulosScalarWhereInput[]
  }

  export type pedidoCreateNestedOneWithoutPedido_articulosInput = {
    create?: XOR<pedidoCreateWithoutPedido_articulosInput, pedidoUncheckedCreateWithoutPedido_articulosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPedido_articulosInput
    connect?: pedidoWhereUniqueInput
  }

  export type articuloCreateNestedOneWithoutPedido_articulosInput = {
    create?: XOR<articuloCreateWithoutPedido_articulosInput, articuloUncheckedCreateWithoutPedido_articulosInput>
    connectOrCreate?: articuloCreateOrConnectWithoutPedido_articulosInput
    connect?: articuloWhereUniqueInput
  }

  export type pedidoUpdateOneRequiredWithoutPedido_articulosNestedInput = {
    create?: XOR<pedidoCreateWithoutPedido_articulosInput, pedidoUncheckedCreateWithoutPedido_articulosInput>
    connectOrCreate?: pedidoCreateOrConnectWithoutPedido_articulosInput
    upsert?: pedidoUpsertWithoutPedido_articulosInput
    connect?: pedidoWhereUniqueInput
    update?: XOR<XOR<pedidoUpdateToOneWithWhereWithoutPedido_articulosInput, pedidoUpdateWithoutPedido_articulosInput>, pedidoUncheckedUpdateWithoutPedido_articulosInput>
  }

  export type articuloUpdateOneRequiredWithoutPedido_articulosNestedInput = {
    create?: XOR<articuloCreateWithoutPedido_articulosInput, articuloUncheckedCreateWithoutPedido_articulosInput>
    connectOrCreate?: articuloCreateOrConnectWithoutPedido_articulosInput
    upsert?: articuloUpsertWithoutPedido_articulosInput
    connect?: articuloWhereUniqueInput
    update?: XOR<XOR<articuloUpdateToOneWithWhereWithoutPedido_articulosInput, articuloUpdateWithoutPedido_articulosInput>, articuloUncheckedUpdateWithoutPedido_articulosInput>
  }

  export type pedido_articulosCreateNestedManyWithoutArticuloInput = {
    create?: XOR<pedido_articulosCreateWithoutArticuloInput, pedido_articulosUncheckedCreateWithoutArticuloInput> | pedido_articulosCreateWithoutArticuloInput[] | pedido_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutArticuloInput | pedido_articulosCreateOrConnectWithoutArticuloInput[]
    createMany?: pedido_articulosCreateManyArticuloInputEnvelope
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
  }

  export type articulo_piezasCreateNestedManyWithoutArticuloInput = {
    create?: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput> | articulo_piezasCreateWithoutArticuloInput[] | articulo_piezasUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutArticuloInput | articulo_piezasCreateOrConnectWithoutArticuloInput[]
    createMany?: articulo_piezasCreateManyArticuloInputEnvelope
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
  }

  export type pedido_articulosUncheckedCreateNestedManyWithoutArticuloInput = {
    create?: XOR<pedido_articulosCreateWithoutArticuloInput, pedido_articulosUncheckedCreateWithoutArticuloInput> | pedido_articulosCreateWithoutArticuloInput[] | pedido_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutArticuloInput | pedido_articulosCreateOrConnectWithoutArticuloInput[]
    createMany?: pedido_articulosCreateManyArticuloInputEnvelope
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
  }

  export type articulo_piezasUncheckedCreateNestedManyWithoutArticuloInput = {
    create?: XOR<articulo_piezasCreateWithoutArticuloInput, articulo_piezasUncheckedCreateWithoutArticuloInput> | articulo_piezasCreateWithoutArticuloInput[] | articulo_piezasUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: articulo_piezasCreateOrConnectWithoutArticuloInput | articulo_piezasCreateOrConnectWithoutArticuloInput[]
    createMany?: articulo_piezasCreateManyArticuloInputEnvelope
    connect?: articulo_piezasWhereUniqueInput | articulo_piezasWhereUniqueInput[]
  }

  export type pedido_articulosUpdateManyWithoutArticuloNestedInput = {
    create?: XOR<pedido_articulosCreateWithoutArticuloInput, pedido_articulosUncheckedCreateWithoutArticuloInput> | pedido_articulosCreateWithoutArticuloInput[] | pedido_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutArticuloInput | pedido_articulosCreateOrConnectWithoutArticuloInput[]
    upsert?: pedido_articulosUpsertWithWhereUniqueWithoutArticuloInput | pedido_articulosUpsertWithWhereUniqueWithoutArticuloInput[]
    createMany?: pedido_articulosCreateManyArticuloInputEnvelope
    set?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    disconnect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    delete?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    update?: pedido_articulosUpdateWithWhereUniqueWithoutArticuloInput | pedido_articulosUpdateWithWhereUniqueWithoutArticuloInput[]
    updateMany?: pedido_articulosUpdateManyWithWhereWithoutArticuloInput | pedido_articulosUpdateManyWithWhereWithoutArticuloInput[]
    deleteMany?: pedido_articulosScalarWhereInput | pedido_articulosScalarWhereInput[]
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

  export type pedido_articulosUncheckedUpdateManyWithoutArticuloNestedInput = {
    create?: XOR<pedido_articulosCreateWithoutArticuloInput, pedido_articulosUncheckedCreateWithoutArticuloInput> | pedido_articulosCreateWithoutArticuloInput[] | pedido_articulosUncheckedCreateWithoutArticuloInput[]
    connectOrCreate?: pedido_articulosCreateOrConnectWithoutArticuloInput | pedido_articulosCreateOrConnectWithoutArticuloInput[]
    upsert?: pedido_articulosUpsertWithWhereUniqueWithoutArticuloInput | pedido_articulosUpsertWithWhereUniqueWithoutArticuloInput[]
    createMany?: pedido_articulosCreateManyArticuloInputEnvelope
    set?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    disconnect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    delete?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    connect?: pedido_articulosWhereUniqueInput | pedido_articulosWhereUniqueInput[]
    update?: pedido_articulosUpdateWithWhereUniqueWithoutArticuloInput | pedido_articulosUpdateWithWhereUniqueWithoutArticuloInput[]
    updateMany?: pedido_articulosUpdateManyWithWhereWithoutArticuloInput | pedido_articulosUpdateManyWithWhereWithoutArticuloInput[]
    deleteMany?: pedido_articulosScalarWhereInput | pedido_articulosScalarWhereInput[]
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type users_pedidosCreateWithoutUsersInput = {
    pedido: pedidoCreateNestedOneWithoutUser_pedidosInput
  }

  export type users_pedidosUncheckedCreateWithoutUsersInput = {
    pedido_id: number
  }

  export type users_pedidosCreateOrConnectWithoutUsersInput = {
    where: users_pedidosWhereUniqueInput
    create: XOR<users_pedidosCreateWithoutUsersInput, users_pedidosUncheckedCreateWithoutUsersInput>
  }

  export type users_pedidosCreateManyUsersInputEnvelope = {
    data: users_pedidosCreateManyUsersInput | users_pedidosCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type users_pedidosUpsertWithWhereUniqueWithoutUsersInput = {
    where: users_pedidosWhereUniqueInput
    update: XOR<users_pedidosUpdateWithoutUsersInput, users_pedidosUncheckedUpdateWithoutUsersInput>
    create: XOR<users_pedidosCreateWithoutUsersInput, users_pedidosUncheckedCreateWithoutUsersInput>
  }

  export type users_pedidosUpdateWithWhereUniqueWithoutUsersInput = {
    where: users_pedidosWhereUniqueInput
    data: XOR<users_pedidosUpdateWithoutUsersInput, users_pedidosUncheckedUpdateWithoutUsersInput>
  }

  export type users_pedidosUpdateManyWithWhereWithoutUsersInput = {
    where: users_pedidosScalarWhereInput
    data: XOR<users_pedidosUpdateManyMutationInput, users_pedidosUncheckedUpdateManyWithoutUsersInput>
  }

  export type users_pedidosScalarWhereInput = {
    AND?: users_pedidosScalarWhereInput | users_pedidosScalarWhereInput[]
    OR?: users_pedidosScalarWhereInput[]
    NOT?: users_pedidosScalarWhereInput | users_pedidosScalarWhereInput[]
    user_id?: IntFilter<"users_pedidos"> | number
    pedido_id?: IntFilter<"users_pedidos"> | number
  }

  export type usersCreateWithoutUsers_pedidosInput = {
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    rol?: string
  }

  export type usersUncheckedCreateWithoutUsers_pedidosInput = {
    id?: number
    email: string
    password: string
    nombre?: string | null
    apellido?: string | null
    rol?: string
  }

  export type usersCreateOrConnectWithoutUsers_pedidosInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUsers_pedidosInput, usersUncheckedCreateWithoutUsers_pedidosInput>
  }

  export type pedidoCreateWithoutUser_pedidosInput = {
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
    pedido_articulos?: pedido_articulosCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutUser_pedidosInput = {
    id?: number
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
    pedido_articulos?: pedido_articulosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutUser_pedidosInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutUser_pedidosInput, pedidoUncheckedCreateWithoutUser_pedidosInput>
  }

  export type usersUpsertWithoutUsers_pedidosInput = {
    update: XOR<usersUpdateWithoutUsers_pedidosInput, usersUncheckedUpdateWithoutUsers_pedidosInput>
    create: XOR<usersCreateWithoutUsers_pedidosInput, usersUncheckedCreateWithoutUsers_pedidosInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUsers_pedidosInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUsers_pedidosInput, usersUncheckedUpdateWithoutUsers_pedidosInput>
  }

  export type usersUpdateWithoutUsers_pedidosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutUsers_pedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    apellido?: NullableStringFieldUpdateOperationsInput | string | null
    rol?: StringFieldUpdateOperationsInput | string
  }

  export type pedidoUpsertWithoutUser_pedidosInput = {
    update: XOR<pedidoUpdateWithoutUser_pedidosInput, pedidoUncheckedUpdateWithoutUser_pedidosInput>
    create: XOR<pedidoCreateWithoutUser_pedidosInput, pedidoUncheckedCreateWithoutUser_pedidosInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutUser_pedidosInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutUser_pedidosInput, pedidoUncheckedUpdateWithoutUser_pedidosInput>
  }

  export type pedidoUpdateWithoutUser_pedidosInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    pedido_articulos?: pedido_articulosUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutUser_pedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    pedido_articulos?: pedido_articulosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type users_pedidosCreateWithoutPedidoInput = {
    users: usersCreateNestedOneWithoutUsers_pedidosInput
  }

  export type users_pedidosUncheckedCreateWithoutPedidoInput = {
    user_id: number
  }

  export type users_pedidosCreateOrConnectWithoutPedidoInput = {
    where: users_pedidosWhereUniqueInput
    create: XOR<users_pedidosCreateWithoutPedidoInput, users_pedidosUncheckedCreateWithoutPedidoInput>
  }

  export type users_pedidosCreateManyPedidoInputEnvelope = {
    data: users_pedidosCreateManyPedidoInput | users_pedidosCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type pedido_articulosCreateWithoutPedidoInput = {
    cantidad?: number
    articulo: articuloCreateNestedOneWithoutPedido_articulosInput
  }

  export type pedido_articulosUncheckedCreateWithoutPedidoInput = {
    articulo_id: number
    cantidad?: number
  }

  export type pedido_articulosCreateOrConnectWithoutPedidoInput = {
    where: pedido_articulosWhereUniqueInput
    create: XOR<pedido_articulosCreateWithoutPedidoInput, pedido_articulosUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_articulosCreateManyPedidoInputEnvelope = {
    data: pedido_articulosCreateManyPedidoInput | pedido_articulosCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type users_pedidosUpsertWithWhereUniqueWithoutPedidoInput = {
    where: users_pedidosWhereUniqueInput
    update: XOR<users_pedidosUpdateWithoutPedidoInput, users_pedidosUncheckedUpdateWithoutPedidoInput>
    create: XOR<users_pedidosCreateWithoutPedidoInput, users_pedidosUncheckedCreateWithoutPedidoInput>
  }

  export type users_pedidosUpdateWithWhereUniqueWithoutPedidoInput = {
    where: users_pedidosWhereUniqueInput
    data: XOR<users_pedidosUpdateWithoutPedidoInput, users_pedidosUncheckedUpdateWithoutPedidoInput>
  }

  export type users_pedidosUpdateManyWithWhereWithoutPedidoInput = {
    where: users_pedidosScalarWhereInput
    data: XOR<users_pedidosUpdateManyMutationInput, users_pedidosUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pedido_articulosUpsertWithWhereUniqueWithoutPedidoInput = {
    where: pedido_articulosWhereUniqueInput
    update: XOR<pedido_articulosUpdateWithoutPedidoInput, pedido_articulosUncheckedUpdateWithoutPedidoInput>
    create: XOR<pedido_articulosCreateWithoutPedidoInput, pedido_articulosUncheckedCreateWithoutPedidoInput>
  }

  export type pedido_articulosUpdateWithWhereUniqueWithoutPedidoInput = {
    where: pedido_articulosWhereUniqueInput
    data: XOR<pedido_articulosUpdateWithoutPedidoInput, pedido_articulosUncheckedUpdateWithoutPedidoInput>
  }

  export type pedido_articulosUpdateManyWithWhereWithoutPedidoInput = {
    where: pedido_articulosScalarWhereInput
    data: XOR<pedido_articulosUpdateManyMutationInput, pedido_articulosUncheckedUpdateManyWithoutPedidoInput>
  }

  export type pedido_articulosScalarWhereInput = {
    AND?: pedido_articulosScalarWhereInput | pedido_articulosScalarWhereInput[]
    OR?: pedido_articulosScalarWhereInput[]
    NOT?: pedido_articulosScalarWhereInput | pedido_articulosScalarWhereInput[]
    pedido_id?: IntFilter<"pedido_articulos"> | number
    articulo_id?: IntFilter<"pedido_articulos"> | number
    cantidad?: IntFilter<"pedido_articulos"> | number
  }

  export type pedidoCreateWithoutPedido_articulosInput = {
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
    user_pedidos?: users_pedidosCreateNestedManyWithoutPedidoInput
  }

  export type pedidoUncheckedCreateWithoutPedido_articulosInput = {
    id?: number
    codigo?: string | null
    presupuesto?: number | null
    estado?: string
    user_pedidos?: users_pedidosUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type pedidoCreateOrConnectWithoutPedido_articulosInput = {
    where: pedidoWhereUniqueInput
    create: XOR<pedidoCreateWithoutPedido_articulosInput, pedidoUncheckedCreateWithoutPedido_articulosInput>
  }

  export type articuloCreateWithoutPedido_articulosInput = {
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasCreateNestedManyWithoutArticuloInput
  }

  export type articuloUncheckedCreateWithoutPedido_articulosInput = {
    id?: number
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    articulo_piezas?: articulo_piezasUncheckedCreateNestedManyWithoutArticuloInput
  }

  export type articuloCreateOrConnectWithoutPedido_articulosInput = {
    where: articuloWhereUniqueInput
    create: XOR<articuloCreateWithoutPedido_articulosInput, articuloUncheckedCreateWithoutPedido_articulosInput>
  }

  export type pedidoUpsertWithoutPedido_articulosInput = {
    update: XOR<pedidoUpdateWithoutPedido_articulosInput, pedidoUncheckedUpdateWithoutPedido_articulosInput>
    create: XOR<pedidoCreateWithoutPedido_articulosInput, pedidoUncheckedCreateWithoutPedido_articulosInput>
    where?: pedidoWhereInput
  }

  export type pedidoUpdateToOneWithWhereWithoutPedido_articulosInput = {
    where?: pedidoWhereInput
    data: XOR<pedidoUpdateWithoutPedido_articulosInput, pedidoUncheckedUpdateWithoutPedido_articulosInput>
  }

  export type pedidoUpdateWithoutPedido_articulosInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    user_pedidos?: users_pedidosUpdateManyWithoutPedidoNestedInput
  }

  export type pedidoUncheckedUpdateWithoutPedido_articulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    presupuesto?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    user_pedidos?: users_pedidosUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type articuloUpsertWithoutPedido_articulosInput = {
    update: XOR<articuloUpdateWithoutPedido_articulosInput, articuloUncheckedUpdateWithoutPedido_articulosInput>
    create: XOR<articuloCreateWithoutPedido_articulosInput, articuloUncheckedCreateWithoutPedido_articulosInput>
    where?: articuloWhereInput
  }

  export type articuloUpdateToOneWithWhereWithoutPedido_articulosInput = {
    where?: articuloWhereInput
    data: XOR<articuloUpdateWithoutPedido_articulosInput, articuloUncheckedUpdateWithoutPedido_articulosInput>
  }

  export type articuloUpdateWithoutPedido_articulosInput = {
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUpdateManyWithoutArticuloNestedInput
  }

  export type articuloUncheckedUpdateWithoutPedido_articulosInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    articulo_piezas?: articulo_piezasUncheckedUpdateManyWithoutArticuloNestedInput
  }

  export type pedido_articulosCreateWithoutArticuloInput = {
    cantidad?: number
    pedido: pedidoCreateNestedOneWithoutPedido_articulosInput
  }

  export type pedido_articulosUncheckedCreateWithoutArticuloInput = {
    pedido_id: number
    cantidad?: number
  }

  export type pedido_articulosCreateOrConnectWithoutArticuloInput = {
    where: pedido_articulosWhereUniqueInput
    create: XOR<pedido_articulosCreateWithoutArticuloInput, pedido_articulosUncheckedCreateWithoutArticuloInput>
  }

  export type pedido_articulosCreateManyArticuloInputEnvelope = {
    data: pedido_articulosCreateManyArticuloInput | pedido_articulosCreateManyArticuloInput[]
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

  export type pedido_articulosUpsertWithWhereUniqueWithoutArticuloInput = {
    where: pedido_articulosWhereUniqueInput
    update: XOR<pedido_articulosUpdateWithoutArticuloInput, pedido_articulosUncheckedUpdateWithoutArticuloInput>
    create: XOR<pedido_articulosCreateWithoutArticuloInput, pedido_articulosUncheckedCreateWithoutArticuloInput>
  }

  export type pedido_articulosUpdateWithWhereUniqueWithoutArticuloInput = {
    where: pedido_articulosWhereUniqueInput
    data: XOR<pedido_articulosUpdateWithoutArticuloInput, pedido_articulosUncheckedUpdateWithoutArticuloInput>
  }

  export type pedido_articulosUpdateManyWithWhereWithoutArticuloInput = {
    where: pedido_articulosScalarWhereInput
    data: XOR<pedido_articulosUpdateManyMutationInput, pedido_articulosUncheckedUpdateManyWithoutArticuloInput>
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
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    pedido_articulos?: pedido_articulosCreateNestedManyWithoutArticuloInput
  }

  export type articuloUncheckedCreateWithoutArticulo_piezasInput = {
    id?: number
    codigo?: string | null
    descripcion?: string | null
    cant_piezas?: number | null
    plano_file?: string | null
    precio?: number | null
    cte_ganancia?: number | null
    pedido_articulos?: pedido_articulosUncheckedCreateNestedManyWithoutArticuloInput
  }

  export type articuloCreateOrConnectWithoutArticulo_piezasInput = {
    where: articuloWhereUniqueInput
    create: XOR<articuloCreateWithoutArticulo_piezasInput, articuloUncheckedCreateWithoutArticulo_piezasInput>
  }

  export type piezaCreateWithoutArticulo_piezasInput = {
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG_file?: string | null
    plano_pleg_SOLID_file?: string | null
    plano_laser_DXF_file?: string | null
    cte_ganancia?: number | null
  }

  export type piezaUncheckedCreateWithoutArticulo_piezasInput = {
    id?: number
    nombre?: string | null
    precio_mat_prima?: number | null
    plano_pleg_DWG_file?: string | null
    plano_pleg_SOLID_file?: string | null
    plano_laser_DXF_file?: string | null
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
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    pedido_articulos?: pedido_articulosUpdateManyWithoutArticuloNestedInput
  }

  export type articuloUncheckedUpdateWithoutArticulo_piezasInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cant_piezas?: NullableIntFieldUpdateOperationsInput | number | null
    plano_file?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: NullableIntFieldUpdateOperationsInput | number | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
    pedido_articulos?: pedido_articulosUncheckedUpdateManyWithoutArticuloNestedInput
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
    plano_pleg_DWG_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF_file?: NullableStringFieldUpdateOperationsInput | string | null
    cte_ganancia?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type piezaUncheckedUpdateWithoutArticulo_piezasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    precio_mat_prima?: NullableIntFieldUpdateOperationsInput | number | null
    plano_pleg_DWG_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_pleg_SOLID_file?: NullableStringFieldUpdateOperationsInput | string | null
    plano_laser_DXF_file?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type users_pedidosCreateManyUsersInput = {
    pedido_id: number
  }

  export type users_pedidosUpdateWithoutUsersInput = {
    pedido?: pedidoUpdateOneRequiredWithoutUser_pedidosNestedInput
  }

  export type users_pedidosUncheckedUpdateWithoutUsersInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_pedidosUncheckedUpdateManyWithoutUsersInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_pedidosCreateManyPedidoInput = {
    user_id: number
  }

  export type pedido_articulosCreateManyPedidoInput = {
    articulo_id: number
    cantidad?: number
  }

  export type users_pedidosUpdateWithoutPedidoInput = {
    users?: usersUpdateOneRequiredWithoutUsers_pedidosNestedInput
  }

  export type users_pedidosUncheckedUpdateWithoutPedidoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type users_pedidosUncheckedUpdateManyWithoutPedidoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_articulosUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    articulo?: articuloUpdateOneRequiredWithoutPedido_articulosNestedInput
  }

  export type pedido_articulosUncheckedUpdateWithoutPedidoInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_articulosUncheckedUpdateManyWithoutPedidoInput = {
    articulo_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_articulosCreateManyArticuloInput = {
    pedido_id: number
    cantidad?: number
  }

  export type articulo_piezasCreateManyArticuloInput = {
    pieza_id: number
  }

  export type pedido_articulosUpdateWithoutArticuloInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    pedido?: pedidoUpdateOneRequiredWithoutPedido_articulosNestedInput
  }

  export type pedido_articulosUncheckedUpdateWithoutArticuloInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type pedido_articulosUncheckedUpdateManyWithoutArticuloInput = {
    pedido_id?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
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