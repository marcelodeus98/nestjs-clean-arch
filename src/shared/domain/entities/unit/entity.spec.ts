import { validate as uuidValidate } from 'uuid';
import { Entity } from '../entitiy';

type StubProps = {
  prop1: string;
  prop2: number;
}

class StubEntity extends Entity <StubProps> {}

describe('Entity unit tests', () => {
  let props: StubProps
  let sut: StubEntity

  it('Should set props and id', () => {
   const props = { prop1: 'value1', prop2: 10 }
   const entity = new StubEntity(props);

   expect(entity.props).toStrictEqual(props);
   expect(entity._id).not.toBeNull();
   expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept props and id', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
   });

   it('Should return a json with props and id', () => {
    const props = { prop1: 'value1', prop2: 10 };
    const id = 'f47ac10b-58cc-4372-a567-0e02b2c3d479';
    const entity = new StubEntity(props, id);

    expect(entity.toJson()).toStrictEqual({
      id,
      ...props
    });
   });
});