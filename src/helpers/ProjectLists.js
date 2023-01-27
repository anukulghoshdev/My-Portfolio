
import img1 from '../../src/assests/New folder/edemy.png'
import img2 from '../../src/assests/New folder/edemy2.png'
import img3 from '../../src/assests/New folder/fitness.png'
import img4 from '../../src/assests/New folder/FZ2.jpg'
import img5 from '../../src/assests/New folder/musicly.png'
import img6 from '../../src/assests/New folder/musicly2.jpg'
import img7 from '../../src/assests/New folder/priver.png'
import img8 from '../../src/assests/New folder/priver2.jpg'
import img9 from '../../src/assests/New folder/TEN2.jpg'
import img10 from '../../src/assests/New folder/musicly-full.png'
import img11 from '../../src/assests/New folder/priver-full.png'


export const projectLists = [
    {
        "id": 1,
        "name": "Priver",
        "type": "Service-App",
        "img1": img11,
        "img2": img8,
        "des": "Priver is a online services website. It sells various kinds of services of an individual. User can take services from other service provider",
        "livelink": "https://ass-server-85f69.web.app/",
        "sourcecode": "https://github.com/anukulghoshdev/Priver-online-service-client",

        "key_features": ['Priver is an online based Service providing website.', 'Users can add their services with specific prices and they can buy any services with their desire.', 'Services can be created, updated and deleted by a user.', 'JWT Token for valid user, used mongodb for backend and nodejs for server side.'],

        "tech": ['React.Js', 'React-Router-Dom', 'JWT', 'Node.Js', 'MongoDB', 'Firebase', 'Tailwind CSS']
    },
    {
        "id": 2,
        "name": "Musicly",
        "type": "Ecommerce-App",
        "img1": img10,
        "img2": img6,
        "des": "Musicly is an online ecommerce platform of resell products store of musical instruments. Buyer can sells various kinds of instruments, buy instruments from other seller",
        "livelink": "https://musicly-e6f50.web.app/",
        "sourcecode": "https://github.com/anukulghoshdev/musicly-client",

        "key_features": ['Used Musical instruments-resale platform with multi vendor users.', 'Sellers can add their product and can advertise their unsold product on their home page.', 'Buyer can show all products category wise, they can book their product and can show all their', 'Admin can see, verify, delete the users ex.all buyers and all sellers on this platform.'],

        "tech": ['React.Js', 'React-Router-Dom', 'JWT', 'Node.Js', 'MongoDB', 'Firebase', 'Tailwind CSS']
    },
    {
        "id": 3,
        "name": "edemy",
        "type": "Educational-App",
        "img1": img1,
        "img2": img2,
        "des": "edemy is a online educational platform. Students can enroll various courses in different categories courses",
        "livelink": "https://e-demy-d30c2.web.app/",
        "sourcecode": "https://github.com/anukulghoshdev/edemy-online-courses-client",

        "key_features": ['Used Musical instruments-resale platform with multi vendor users', 'different user role has different actions.', 'user roles: Admin, Seller, Buyer.'],

        "tech": ['React.Js', 'React-Bootstrap', 'React-Router-Dom', 'Node.Js', 'MongoDB', 'Firebase', 'Tailwind CSS']
    },
    {
        "id": 4,
        "name": "Fitness Zone",
        "type": "Fitness-App",
        "img1": img3,
        "img2": img4,
        "des": "Fitness Zone is a Fitness tranning website. User can take a tranning or workout and set the timmer according their desire",
        "livelink": "https://fitness-zone-anukulghoshdev-70104b.netlify.app/",


        "key_features": ['Edemy is an application of online courses.', 'Users can enroll in their desired courses.', 'An online e-learning site where there are many courses according to the categories.'],

        "sourcecode": "#",
        "tech": ['React.Js', 'Tailwind CSS']
    },
    {
        "id": 5,
        "name": "Times of Express News",
        "type": "Online News-APP",
        "img1": img9,
        "img2": img9,
        "des": "Times of express news is a news portal website. User can read newes by category wise",
        "livelink": "https://fitness-zone-anukulghoshdev-70104b.netlify.app/",

        "key_features": ['Get updated category wise news', 'All news are sorted', 'Show Specific news with modal'],

        "sourcecode": "#",
        "tech": ['React.Js', 'Tailwind CSS']
    }
]