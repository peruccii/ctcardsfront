import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

interface MessageContextType {
  data: {
    message: string;
    title: string;
    sub_title: string;
    email: string;
    url_music: string;
  };
  setData: (
    message: string,
    title: string,
    sub_title: string,
    email: string,
    url_music: string,
  ) => void;
}

const FieldObject = {
  message: '',
  title: '',
  sub_title: '',
  email: '',
  url_music: '',
};

export interface IFieldObject {
  message: string;
  title: string;
  sub_title: string;
  email: string;
  url_music: string;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [data, setState] = useState<typeof FieldObject>(FieldObject);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('messageData');
      if (storedData) {
        setState(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Failed to retrieve message data:', error);
    }
  }, []);

  const setData = (
    message: string,
    title: string,
    sub_title: string,
    email: string,
    url_music: string,
  ) => {
    const newData = { message, title, sub_title, email, url_music };
    setState(newData);
  };

  useEffect(() => {
    try {
      localStorage.setItem('messageData', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save message data:', error);
    }
  }, [data]);

  const value = useMemo(() => ({ data, setData }), [data]);

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
