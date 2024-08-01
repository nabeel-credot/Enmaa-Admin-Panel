import { useEffect, useState } from 'react';
import { getTableData, updateTableDataById } from'./homeapi';

const cmsFetchTableData = (page) => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTableData();
        const filteredData = data.filter(row => row.page === page);
        setTableData(filteredData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const updateStatus = async (index) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].status = !updatedTableData[index].status;
    setTableData(updatedTableData);

    try {
      await updateTableDataById(updatedTableData[index]._id, updatedTableData[index]);
      alert('Status updated successfully');
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  return { tableData, loading, error, updateStatus };
};

export default cmsFetchTableData;