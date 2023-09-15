"use client";
import { getTestList } from "@/shared/ui/BurgerButton/api/testsData/fakeApi/fakeAPI";
import { Container, ContainerTests, Description, Line, LinkTest, Test } from "./style";
import { useEffect, useState } from "react";
import { type } from "os";
import { Kruk } from "@/widgets/NavMenu/style";

type TestListT = {
  name:string
  id:number
  icon:string
  description:string
}
export default function TestsList() {
  const [testsList, setTestList] = useState<TestListT[]>(getTestList())
  useEffect(()=>{
    const arrList:TestListT[] = getTestList()
    setTestList(arrList)
  },[])

  return (
<>
        {testsList.map(e=>(
          <Test key={e.id}>
          <LinkTest  href={`/testing/${e.id}`}><Kruk dangerouslySetInnerHTML={{ __html: e.icon }}></Kruk>{e.name}</LinkTest>
          <Description >{e.description}</Description>
          <Line ></Line>
          </Test>
        ))}
</>
  );
}
