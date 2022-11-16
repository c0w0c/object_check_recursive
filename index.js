class Recursive {
  objectCheck(object, inheritanceKey = '') {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(object)) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // NOTE: 檢查的值是物件(排除陣列)，則再進入物件內層進行檢查
        let newInput = '';

        if (inheritanceKey === '') {
          newInput = key;
        } else {
          newInput = `${inheritanceKey}.${key}`;
        }

        this.objectCheck(value, newInput);
      } else {
        // NOTE: 檢查的值非物件，則進行資料檢查
        let searchKey = '';

        if (inheritanceKey === '') {
          searchKey = key;
        } else {
          searchKey = `${inheritanceKey}.${key}`;
        }

        console.log(`${searchKey} =`, value, `, type: ${typeof value === 'object' ? 'array' : typeof value}`);
      }
    }
  }
}

const recursive = new Recursive();

const object = {
  a: {
    b: {
      c: {
        d: {
          e: {
            f: {
              g: 111,
            },
          },
        },
        d1: true,
      },
    },
    b1: [1, 2, 3, 4, 5],
  },
  a1: '12345',
};

recursive.objectCheck(object);
