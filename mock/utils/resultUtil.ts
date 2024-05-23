//code 0 代表成功
export function resultSuccess(data = {}) {
  return {
    code: 0,
    message: "成功",
    data,
  };
}

//code 非0失败
export function resultError(message = "未知错误") {
  return {
    code: 1,
    message,
  };
}

export function resultPageSuccess(pageIndex = 1, pageSize = 10, list = []) {
  const pageData = pagination(pageIndex, pageSize, list);
  return {
    ...resultSuccess({
      pageSize,
      pageIndex,
      total: list.length,
      list: pageData,
    }),
  };
}

export function pagination(pageIndex: number, pageSize: number, data: any[]) {
  const offset = (pageIndex - 1) * Number(pageSize);
  return offset + Number(pageSize) >= data.length
    ? data.slice(offset, data.length)
    : data.slice(offset, offset + Number(pageSize));
}
