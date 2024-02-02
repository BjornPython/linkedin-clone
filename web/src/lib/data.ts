import myDp from 'public/images/dp.png'
import sampleChatDp from 'public/images/user2.jpg'

export const usersInfo = {
  user1: {
    name: 'Michael Nguyen',
    bio: 'Marketing Director at a Fortune 500 Company ',
    dpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7',
    bannerURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner1.png?alt=media&token=202e06b1-0124-4dc5-9853-bc08b8312f07',
  },
  user2: {
    name: 'Maximo Guzman',
    bio: 'Senior Data Scientist at a Tech Startup',
    dpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76',
    bannerURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner2.png?alt=media&token=268e1909-b893-47ac-8038-7f0cb1b87679',
  },
  user3: {
    name: 'Marcus Lee',
    bio: 'Human Resources Manager at a Nonprofit Organization',
    dpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser3.jpg?alt=media&token=788649aa-950a-4751-b4b2-f8d4f001736f',
    bannerURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner3.png?alt=media&token=4c99a80b-7698-4e36-a399-f5cfa4b8160c',
  },
  user4: {
    name: 'Julia Kim',
    bio: 'Creative Director at a Digital Marketing Agency',
    dpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6',
    bannerURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner4.png?alt=media&token=eec1f409-ae73-4fb7-a7f1-379052a58e93',
  },
  user5: {
    name: 'Emily Chen',
    bio: 'Chief Financial Officer at a Healthcare System',
    dpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser5.png?alt=media&token=fedd712a-a5b0-4e79-9221-5ae5b114c222',
    bannerURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner5.png?alt=media&token=5c714a35-04eb-4f14-bf9e-b38eaf5df7d8',
  },
  user6: {
    name: 'David Rodriguez',
    bio: 'Product Manager at a SaaS Company',
    dpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser6.jpg?alt=media&token=e59d5dfa-4784-41d9-b658-a18dddbfd2b1',
    bannerURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userBanners%2Fbanner6.png?alt=media&token=ae887515-967e-4d13-9cf1-bc2a4b4a5086',
  },
}

export const postsInfo = {
  postId1: {
    userId: 'user1',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost1.png?alt=media&token=77939991-2fe8-4747-912c-d18e21ca254a',
    caption:
      'Keep pushing forward, because your determination knows no bounds! #motivation #success #determination',
  },
  postId2: {
    userId: 'user2',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost2.png?alt=media&token=e4e985bb-31d8-40be-b62d-b529f7b892b4',
    caption:
      "Don't let failures hold you back - embrace them and use them to fuel your success! #motivation #success #resilience",
  },
  postId3: {
    userId: 'user3',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost3.png?alt=media&token=9c672f5a-f4ac-4950-b70b-eaf138ccc7d4',
    caption:
      "Success is not just about personal accomplishments, it's about inspiring and empowering those around you. #motivation #leadership #success",
  },
  postId4: {
    userId: 'user4',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/posts%2FPost4.png?alt=media&token=708ed7ed-d8ac-43f1-a446-ef89aeb20d9f',
    caption:
      'Take action today to bring yourself one step closer to your goals. Remember, the only limit is the amount of action you take! #motivation #goals #success',
  },
}

export const postIds = ['postId1', 'postId2', 'postId3', 'postId4']

export const userSuggestions = {
  user4: { ...usersInfo['user4'] },
  user5: { ...usersInfo['user5'] },
  user6: { ...usersInfo['user6'] },
}

export const jobs = {
  job1: {
    company: 'ByteBrew',
    title: 'Full Stack Developer',
    description:
      'We are seeking a skilled Full Stack Developer to join our dynamic team. The successful candidate will be responsible for developing and maintaining web applications using cutting-edge technologies.',
    location: 'Manila, Philippines',
    DpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F1.png?alt=media&token=36360030-2035-4938-986e-3f9853489479',
  },
  job2: {
    company: 'LogicLynx',
    title: 'Mobile App Developer',
    description:
      'We are looking for a talented Mobile App Developer to join our team. The successful candidate will be responsible for developing and maintaining mobile applications on iOS and Android platforms.',
    location: 'Cebu, Philippines',
    DpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F2.png?alt=media&token=0ae88fbe-ae8e-40b7-abcd-a795ddf88338',
  },
  job3: {
    company: 'InnovateIQ',
    title: 'Frontend Developer',
    description:
      'We are seeking a skilled Frontend Developer to join our team. The successful candidate will be responsible for developing and maintaining client-side web applications using HTML, CSS, and JavaScript.',
    location: 'Makati, Philippines',
    DpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F3.png?alt=media&token=5f069f75-4c03-4190-82ec-da3e8bbfd0fb',
  },
  job4: {
    company: 'TechTide',
    title: 'Backend Developer',
    description:
      'We are looking for a talented Backend Developer to join our team. The successful candidate will be responsible for developing and maintaining server-side web applications using Node.js and other related technologies.',
    location: 'Davao, Philippines',
    DpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F4.png?alt=media&token=110f3cfb-13aa-4d15-9a97-56c4f3db81a0',
  },
  job5: {
    company: 'CodeLift',
    title: 'Software Engineer',
    description:
      'We are seeking a skilled Software Engineer to join our team. The successful candidate will be responsible for developing and maintaining software applications using various programming languages and frameworks.',
    location: 'Quezon City, Philippines',
    DpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F5.png?alt=media&token=9ecdfa32-b7ae-4dfb-844c-b2cece7a065f',
  },
  job6: {
    company: 'DataDrift',
    title: 'UI/UX Designer',
    description:
      'We are looking for a talented UI/UX Designer to join our team. The successful candidate will be responsible for designing and developing user interfaces for web and mobile applications.',
    location: 'Taguig, Philippines',
    DpURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/jobDps%2F6.png?alt=media&token=0356a760-d50d-4525-aa1d-993ae32fbef0',
  },
}

export const sampleConvo = [
  {
    sender: 'Maximo Guzman',
    message:
      "Hi Nathan, I stumbled upon your LinkedIn profile and I must say I'm very impressed by your skills and projects. You seem to have a great understanding of software development.",
    dp: sampleChatDp,
  },
  {
    sender: 'Nathan Flores',
    message: "Thank you, Maximo. I'm always open to new opportunities!",
    dp: myDp,
  },
  {
    sender: 'Maximo Guzman',
    message:
      "That's great to hear, Nathan. In my experience, being disciplined, coachable, and passionate about the industry are some of the most important traits for a developer. Would you agree?",
    dp: sampleChatDp,
  },
  {
    sender: 'Nathan Flores',
    message:
      'Absolutely. I think discipline is important because it helps you stay focused and meet deadlines, while being coachable allows you to learn from your mistakes and continuously improve. And of course, being passionate about the industry helps you stay motivated and engaged in your work.',
    dp: myDp,
  },
  {
    sender: 'Maximo Guzman',
    message:
      'Well said, Nathan. You seem to embody all of those traits, which is why I think you would be a valuable member of a company. Have you ever considered working for a different company?',
    dp: sampleChatDp,
  },
  {
    sender: 'Nathan Flores',
    message: "I'm always open to new opportunities!",
    dp: myDp,
  },
]

export const notifications = [
  {
    time: '2h',
    name: 'John Smith',
    text: ' has endorsed you for Project Management. Thank them for their support!',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7',
  },
  {
    time: '4h',
    name: 'Jane Doe ',
    text: "has viewed your profile. Take a look at theirs and see if there's an opportunity to connect.",
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76',
  },
  {
    time: '6h',
    name: 'David Lee',
    text: 'has shared an article on leadership. Check it out and join the conversation!',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser5.png?alt=media&token=fedd712a-a5b0-4e79-9221-5ae5b114c222',
  },
  {
    time: '8h',
    name: 'Samantha Brown',
    text: ' has started a new job at XYZ Company. Congratulate them and wish them the best.',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6',
  },
  {
    time: '10h',
    name: 'Michael Kim',
    text: 'Michael Kim has published a post on marketing strategies. Give it a read and share your thoughts in the comments.',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser6.jpg?alt=media&token=e59d5dfa-4784-41d9-b658-a18dddbfd2b1',
  },
  {
    time: '12h',
    name: 'Lauren Chen',
    text: 'Lauren Chen has invited you to connect on LinkedIn. Accept the invitation and start building your network.',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser1.jpg?alt=media&token=cd567716-99f4-4706-b29e-bfa30c8484c7',
  },
  {
    time: '14h',
    name: 'Alex Rodriguez',
    text: "Alex Rodriguez has posted a job opening for Digital Marketing Manager. Check it out and see if it's a good fit for you.",
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser5.png?alt=media&token=fedd712a-a5b0-4e79-9221-5ae5b114c222',
  },
  {
    time: '16h',
    name: 'Emily Nguyen',
    text: 'Emily Nguyen has added a new project to their profile. Take a look and learn more about their work.',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser4.jpg?alt=media&token=3e598367-6827-4ff6-8445-ba87ce9415b6',
  },
  {
    time: '18h',
    name: 'Emily Nguyen',
    text: 'Emily Nguyen  has received an award for Top Sales Performance. Congratulate them on their accomplishment.',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser3.jpg?alt=media&token=788649aa-950a-4751-b4b2-f8d4f001736f',
  },
  {
    time: '20h',
    name: 'Sarah Johnson',
    text: 'Sarah Johnson has commented on your post. Respond to their comment and continue the conversation.',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/linkedin-clone-953e3.appspot.com/o/userDps%2Fuser2.jpg?alt=media&token=626735c1-4f64-4091-a4af-b114eca66a76',
  },
]
