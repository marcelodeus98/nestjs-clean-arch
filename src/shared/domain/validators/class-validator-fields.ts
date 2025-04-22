import { validateSync } from 'class-validator';
import {
  FieldsErrors,
  ValidatorFieldsInterface,
} from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  errors: FieldsErrors = null;
  validatedData: PropsValidated = null;
  validate(data: any): boolean {
    const erros = validateSync(data);

    if(erros.length) {
      this.errors = {};
      erros.forEach((error) => {
        this.errors[error.property] = Object.values(error.constraints);
      });
    } else {
      this.validatedData = data;
    }
    return !erros.length;
  }
}