export function SuccessfulProcess(data: any, message?: string) {
  return {
    valid: true,
    message: message ? message : 'Operación exitosa',
    data: data,
  };
}

export function ErrorProcess(message: string, data: any) {
  return {
    valid: false,
    message: message ? message : 'Operación fallida',
    data: data,
  };
}
