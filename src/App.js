import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import ParentTwo from './components/ParentTwo';
import ParentThree from './components/ParentThree';
import Comment from './components/Comment';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      {/* <Parent />
      <hr/>
      <ParentTwo />
      <hr/>
      <ParentThree /> */}

      <Article 
        title="Безопасность"
        text="Биржа копирайтинга Text.ru предоставляет гарантии как заказчикам, так и исполнителям. Заказчик получает качественный текст, а исполнитель — оплату за свою работу при условии отличного выполнения. Для разрешения конфликтных ситуаций предусмотрен Арбитраж." 
      />
      <hr />
      <Comment 
        comment="Биржа копирайтинга Text.ru — это достойный заработок для копирайтеров и возможность заказать текст у профессиональных авторов. Здесь вы можете реализовать свой творческий потенциал или приобрести уникальные статьи для нужд своего сайта." 
      />
      <hr />
      <Comment 
        comment="" 
      />
    </div>
  );
}

export default App;
