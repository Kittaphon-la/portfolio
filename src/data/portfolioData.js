import weatherAppImage from '../assets/images/WeatherApp.jpg';
import todoListImage from '../assets/images/to-bo list.jpg';

export const projects = [
  {
    id: 1,
    title: "weather-app", 
    description: "แอปพลิเคชันพยากรณ์อากาศที่ผมใช้เพื่อฝึกฝนการดึงข้อมูลจาก API เป็นโปรเจกต์เล็กๆ ที่สนุกกับการทำครับ",
    image: weatherAppImage, 
    technologies: ["React", "OpenWeather API", "CSS3"],
    demoUrl: "https://www.figma.com/board/szqMZOmtfWrG6rxtOwbPx4/Week4--JavaScript-Workshop?node-id=709-446&t=471UdQX08PHz1CaQ-0", 
    githubUrl: "https://github.com/PanuwatYathuam/my-weather-app", 
    featured: true
  },
  {
    id: 2,
    title: "TodoList",
    description: "แอปพลิเคชัน To-Do List ที่ผมสร้างขึ้นด้วย React เพื่อฝึกการจัดการ State และการสร้าง Component ครับ สามารถเพิ่ม, ลบ, และทำเครื่องหมายว่างานเสร็จแล้วได้",
    image: todoListImage, 
    technologies: ["React", "JavaScript", "CSS3"],
    demoUrl: "https://lab3-reactjs-fundamentals-experiment2.netlify.app/", 
    githubUrl: "https://github.com/PanuwatYathuam/react-workshop", 
    featured: false
  },
];