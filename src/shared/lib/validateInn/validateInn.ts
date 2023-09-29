export interface InnError {
  code: number;
  message: string;
}

export function validateInn(inn: string, error: InnError): boolean {
  let result = false;

  if (!inn.length) {
    error.code = 1;
    error.message = "ИНН пуст";
  } else if (/[^0-9]/.test(inn)) {
    error.code = 2;
    error.message = "ИНН может состоять только из цифр";
  } else if (![10].includes(inn.length)) {
    error.code = 3;
    error.message = "ИНН состоит из 10 цифр";
  } else {
    const checkDigit = (inn: string, coefficients: number[]): number => {
      let n = 0;

      for (const i in coefficients) {
        n += coefficients[i] * parseInt(inn[i]);
      }

      return parseInt((n % 11 % 10).toString());
    };

    switch (inn.length) {
      case 10: {
        const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);

        if (n10 === parseInt(inn[9])) {
          result = true;
        }

        break;
      }
      case 12: {
        const n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
        const n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);

        if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
          result = true;
        }

        break;
      }
    }

    if (!result) {
      error.code = 4;
      error.message = "Неправильное контрольное число";
    }
  }

  return result;
}