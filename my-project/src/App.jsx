import { useState } from 'react'
import './App.css'
import Bankbody from './components/bank/Bankbody'
import Bankheader from './components/bank/Bankheader'
import BankForm from './components/bank/BankForm';

//     id: self.crypto.randomUUID(),
function App() {
  const [selectcategory, setcategory] = useState("ALL");
  const [insdata, setdata] = useState('');
  console.log(insdata);
  const array = [
    {
      id: 1,
      title: "예금상픔1",
      summary: "100만원 이하 연 0.2% 이윤금리",
      category: "Deposit"
    },
    {
      id: 2,
      title: "적금상픔1",
      summary: "100만원 이하 연 3.2% 이윤금리",
      category: "Saving"
    },
    {
      id: 3,
      title: "대출상픔1",
      summary: "100만원 이하 연 4.2% 상환금리",
      category: "Loan"
    }
  ]

  const arrayCategory = () => {
    const originarray = [...array];
    return (selectcategory !== "ALL" ? originarray.filter(array => array.category === selectcategory) : originarray)
  }


  return (
    <>


      <BankForm />

    </>
  )
}

export default App
