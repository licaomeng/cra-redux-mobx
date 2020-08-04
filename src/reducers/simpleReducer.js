const dataList = [
  { firstName: 'Messi', lastName: 'Li', gender: 'Male' },
  { firstName: 'Leslie', lastName: 'Cheung', gender: 'Male' },
  { firstName: 'Andy', lastName: 'Lau', gender: 'Male' },
  { firstName: 'Jack', lastName: 'Cheung', gender: 'Male' },
  { firstName: 'Jackie', lastName: 'Chan', gender: 'Male' },
  { firstName: 'Alan', lastName: 'Tam', gender: 'Male' },
  { firstName: 'Scarlett', lastName: 'Johansson', gender: 'Female' },
  { firstName: 'Sophie', lastName: 'Marceau', gender: 'Female' },
  { firstName: 'Marilyn', lastName: 'Monroe', gender: 'Female' },
  { firstName: 'Cherie', lastName: 'Chung', gender: 'Female' },
  { firstName: 'Anita', lastName: 'Mui', gender: 'Female' }
]

export default (state = {}, action) => {

  switch (action.type) {
    case 'ON_SEARCH': {
      const { firstName, lastName, gender, page } = action.payload
      const result = dataList
        .filter(item => {
          if (
            item.firstName.includes(firstName) &&
            item.lastName.includes(lastName) &&
            item.gender.includes(gender)
          ) {
            return true
          }
        })
      const pageSize = Math.ceil(result.length / 5)
      const startIndex = ((page > pageSize ? 1 : page) - 1) * 5

      return {
        ...state,
        pageSize,
        dataList: result.slice(startIndex, startIndex + 5)
      }
    }
    default:
      return {
        ...state,
        pageSize: Math.ceil(dataList.length / 5),
        dataList: dataList.slice(0, 5)
      }
  }
}