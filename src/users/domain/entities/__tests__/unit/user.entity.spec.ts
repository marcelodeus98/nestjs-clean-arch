import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  })

  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter method user filed', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(props.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Getter method email filed', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(props.email);
    expect(typeof sut.email).toBe('string');
  });

  it('Getter method password filed', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(props.password);
    expect(typeof sut.password).toBe('string');
  });

  it('Getter method createdAt filed', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  it('Setter method name', () => {
    const name = faker.person.fullName();
    sut.updateName(name);
    expect(sut.name).toBe(name);
  });

  it('Setter method password', () => {
    const password = faker.internet.password();
    sut.updatePassword(password);
    expect(sut.password).toBe(password);
  });

  it('UpdateName method', () => {
    const name = faker.person.fullName();
    sut.updateName(name);
    expect(sut.name).toBe(name);
  });

  it('UpdatePassword method', () => {
    const password = faker.internet.password();
    sut.updatePassword(password);
    expect(sut.password).toBe(password);
  });
});