declare namespace API {
  type BiRespDto = {
    chartId?: number;
    genChart?: string;
    genResult?: string;
  };

  type Chart = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: string;
    isDelete?: number;
    name?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartEditReqDto = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartQueryReqDto = {
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type DeleteReqDto = {
    id?: number;
  };

  type File = {
    absolute?: boolean;
    absoluteFile?: File;
    absolutePath?: string;
    canonicalFile?: File;
    canonicalPath?: string;
    directory?: boolean;
    executable?: boolean;
    file?: boolean;
    freeSpace?: number;
    hidden?: boolean;
    lastModified?: number;
    name?: string;
    parent?: string;
    parentFile?: File;
    path?: string;
    readable?: boolean;
    totalSpace?: number;
    usableSpace?: number;
    writable?: boolean;
  };

  type genChartByAiAsyncMqUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartByAiASyncUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type genChartUsingPOSTParams = {
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type InputStream = true;

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Chart[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Resource = {
    description?: string;
    file?: File;
    filename?: string;
    inputStream?: InputStream;
    open?: boolean;
    readable?: boolean;
    uri?: URI;
    url?: URL;
  };

  type RestRespBiRespDto_ = {
    code?: number;
    data?: BiRespDto;
    message?: string;
  };

  type RestRespBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type RestRespChart_ = {
    code?: number;
    data?: Chart;
    message?: string;
  };

  type RestRespLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type RestRespPageChart_ = {
    code?: number;
    data?: PageChart_;
    message?: string;
  };

  type RestRespUserLoginRespDto_ = {
    code?: number;
    data?: UserLoginRespDto;
    message?: string;
  };

  type URI = {
    absolute?: boolean;
    authority?: string;
    fragment?: string;
    host?: string;
    opaque?: boolean;
    path?: string;
    port?: number;
    query?: string;
    rawAuthority?: string;
    rawFragment?: string;
    rawPath?: string;
    rawQuery?: string;
    rawSchemeSpecificPart?: string;
    rawUserInfo?: string;
    scheme?: string;
    schemeSpecificPart?: string;
    userInfo?: string;
  };

  type URL = {
    authority?: string;
    content?: Record<string, any>;
    defaultPort?: number;
    file?: string;
    host?: string;
    path?: string;
    port?: number;
    protocol?: string;
    query?: string;
    ref?: string;
    userInfo?: string;
  };

  type UserLoginReqDto = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserLoginRespDto = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserRegisterReqDto = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };
}
