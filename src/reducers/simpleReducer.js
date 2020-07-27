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

export default (state = { gender: '', dataList }, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
}