import { useEffect, useState } from 'react';
import { useMessage } from '../MessageContext';
import { Label } from './label';
import { toDate } from 'date-fns';

export function CustomDateInput() {
  const { data, setData } = useMessage();

  const [date, setDate] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedDate = localStorage.getItem('dateI');
      if (savedDate) {
        setDate(savedDate);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');
    if (inputValue.length <= 2) {
      inputValue = inputValue;
    } else if (inputValue.length <= 4) {
      inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
    } else if (inputValue.length <= 8) {
      inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}/${inputValue.slice(4)}`;
    }

    setData(
      data.message,
      data.title,
      data.sub_title,
      data.email,
      data.url_music,
      toDate(inputValue),
    );

    setDate(inputValue);
    localStorage.setItem('dateI', inputValue);

    if (inputValue.length === 10) {
      const [day, month, year] = inputValue.split('/').map(Number);
      const date = new Date(year, month - 1, day);

      if (!isNaN(date.getTime())) {
        setData(
          data.message,
          data.title,
          data.sub_title,
          data.email,
          data.url_music,
          date,
        );
      }
    }
  };

  return (
    <div>
      <Label htmlFor="datee" className="text-sm sm:text-sm mb-2">
        Data
      </Label>
      <input
        type="text"
        value={date}
        onChange={handleInputChange}
        placeholder="dd/mm/yyyy"
        maxLength={10}
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      />
    </div>
  );
}
