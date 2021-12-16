interface IValueObjectProps {
  [index: string]: any;
}

/**
 * @description ValueObjects are objects that we determine their
 * equality through their structural property.
 */

export abstract class BaseValueObject<T extends IValueObjectProps> {
  public props: T;

  protected constructor(props: T) {
    this.props = {
      ...props
    };
  }

  /**
   * @param vo - value object
   */
  public equals(vo?: BaseValueObject<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }

    if (vo.props === undefined) {
      return false;
    }

    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}
