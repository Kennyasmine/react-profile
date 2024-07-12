import React from 'react';
import './App.css'

function App() {
  const students = [
    {id:1, name:"Balogun Waliyat", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com/in/waliyat-balogun/", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:2, name:"Oriade Lateefat", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:3, name:"Yunusa Usman", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:4, name:"Abdulmumeen Etudaye", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:5, name:"Aderolu Lateefat", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:6, name:"Adelabu Muminah", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:7, name:"Hammed Ahishat", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:8, name:"Musbaideen Kehinde", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:9, name:"Awwal Lambe", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:10, name:"Oriyomi Abdul-Hafeez", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:11, name:"Owonikoko Hawah", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"},
    {id:12, name:"Adeleke Ibrahim", stack:"Full Stack Developer", imgUrl:"https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=", linkedin: "https://www.linkedin.com", twitter: "https://www.twitter.com", github: "https://www.github.com", instagram: "https://www.instagram.com"}
  ]

  return (
    <>
      <div className="container">
        <h2>IOTB Web Development Students</h2>
        <div className="container-card">
          <ul className="student-profile-card">
            {students.map(student => (
              <li className="student-list" key={student.id}>
                <div className="student-card">
                {/* <div className="card-img-container"></div> */}
                  <img src={student.imgUrl} className="card-img-top" alt={student.name} />
                  <p><strong>{student.name}</strong></p>
                  <p>{student.stack}</p>
                  <div className="social-links">
                    <a href={student.linkedin} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" /></a>
                    <a href={student.twitter} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" /></a>
                    <a href={student.github} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" /></a>
                    <a href={student.instagram} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" /></a>
                  </div>
                  <p className="text-btn">Follow</p>
                  <p className="text-btn">Connect</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
