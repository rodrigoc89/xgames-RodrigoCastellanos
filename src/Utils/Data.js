const dataFromBD = [
    {
        id: 101,
        title: 'Attila Towal War',
        img: 'https://i.postimg.cc/9fHhskVV/attila.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,
        requirements:'lorem ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum',

    },
    {
        id: 102,
        title: 'Total War™: ROME II - Emperor Edition',
        img: 'https://i.postimg.cc/Mp0W20HQ/rome2.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,
        requirements:'lorem ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum',


    },
    {
        id: 103,
        title: 'Total War: ROME REMASTERED',
        img: 'https://i.postimg.cc/15qmM1ZM/rome-Remastered.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,
        requirements:'lorem ipsum dolor sit amet, ipsum dolor sit amet, ipsum dolor sit amet, ipsum',


    },
    {
        id: 104,
        title: 'Total War: WARHAMMER',
        img: 'https://i.postimg.cc/bvTNb0jh/warhamer.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,
        requeriments:
        {
            Minimo: {
                SO: 'Windows 7 64Bit',
                Procesador:'Procesador: Intel® Core™ 2 Duo 3.0Ghz',
                Memoria:'3 GB de RAM',
                Gráfricos: '(DirectX 11) AMD Radeon HD 5770 1024MB | NVIDIA GTS 450 1024MB | Intel HD4000 @720P',
                DirectX: 'Versión 11',
                Almacenamiento:' 35 GB de espacio disponible',
                Notas:'PC Integrated graphics chipsets require 4 GB RAM, e.g. Intel HD series.',
            }
        } 
    },
    {
        id: 105,
        title: 'Total War: WARHAMMER II',
        img: 'https://i.postimg.cc/jSYsF3xT/warhamer2.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    },
    {
        id: 106,
        title: 'Total War: WARHAMMER III',
        img: 'https://i.postimg.cc/NMjGxygr/warhamer3.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    },
    {
        id: 107,
        title: 'Total War: THREE KINGDOMS',
        img: 'https://i.postimg.cc/LXQ9QHXQ/three-Kings.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    },
    {
        id: 108,
        title: 'Total War: SHOGUN 2',
        img: 'https://i.postimg.cc/mkcb001L/shogun2.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    },
    {
        id: 109,
        title: 'A Total War Saga: TROY',
        img: 'https://i.postimg.cc/44M4zNjm/troy.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    },
    {
        id: 110,
        title: 'Total War: NAPOLEON – Definitive Edition',
        img: 'https://i.postimg.cc/NFWgYpR1/napoleon.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    },
    {
        id: 111,
        title: 'Total War: EMPIRE – Definitive Edition',
        img: 'https://i.postimg.cc/6pCQ6JjT/empire.jpg',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Placeat nulla quasi tempore perferendis, debitis alias, excepturi doloribus repellat aut velit ab! Saepe, recusandae vero.Ipsam architecto vitae pariatur a.Quidem.',
        price: 100,
        stock: 10,

    }




]
export default dataFromBD;