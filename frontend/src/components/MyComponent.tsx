import  { useEffect, useState, FC } from 'react';

import { TestData } from "../types/interface"

const MyComponent: FC = () => {
  const [testData, setTestData] = useState<TestData | null>(null);

  useEffect(() => {
    fetchTestData();
  }, []);

  useEffect(() => {
    console.log(testData);
  }, [testData]);

  const fetchTestData = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:5050/app/api/test/');
      const jsonData: TestData = await response.json();
      setTestData(jsonData);
    } catch (error) {
      console.error('Error fetching test data:');
    }
  };

  return (
    <div>
      <p> Hello to MyComponent</p>
      <h1>Test Data from Backend:</h1>
      <p> {testData?.body} </p>
    </div>
  );
};

export default MyComponent;
