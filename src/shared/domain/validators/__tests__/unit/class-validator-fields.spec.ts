import { ClassValidatorFields } from "../../class-validator-fields";
import * as libClassValidator from 'class-validator';

class StubClassValidatorFields extends ClassValidatorFields<{
  field: string
}>{

}

describe('ClassValidatorFields unit tests', () => {
 it('Should initialize errors and validatedData variables with null', () => {
   const sut = new StubClassValidatorFields();

   expect(sut.errors).toBeNull();
   expect(sut.validatedData).toBeNull();
 });

 it('Should validate with erros', ()  => {
   const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
   spyValidateSync.mockReturnValue([
     {
       property: 'field',
       constraints: {
         isRequired: 'field is required'
       },
     },
   ]);

   const sut = new StubClassValidatorFields();

   expect(sut.validate({})).toBeFalsy();
   expect(spyValidateSync).toHaveBeenCalled();
   expect(sut.validatedData).toBeNull();
   expect(sut.errors).toStrictEqual({
     field: ['field is required'],
   });
 });

 it('Should validate without erros', ()  => {
  const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
   spyValidateSync.mockReturnValue([]);

   const sut = new StubClassValidatorFields();

   expect(sut.validate({ field: 'value' })).toBeTruthy();
   expect(spyValidateSync).toHaveBeenCalled();
   expect(sut.validatedData).toStrictEqual({ field: 'value' });
   expect(sut.errors).toBeNull();
 });
});