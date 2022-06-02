class Utils {
  static wildCardSearch(list, input) {
    const searchText = (item) => {
      for (let key in item) {
        if (item[key] == null) {
          continue;
        }
        if (
          item[key]
            .toString()
            .toUpperCase()
            .indexOf(input.toString().toUpperCase()) !== -1
        ) {
          return true;
        }
      }
    };
    list = list.filter((value) => searchText(value));
    return list;
  }
}

export default Utils;
