import React, {useEffect} from 'react';
import {Header} from "./components/Header";
import lightLogo from "./assets/light-logo.png";
import darkLogo from "./assets/dark-logo.png";
import {useDarkTheme} from "./context/ThemeContext";


function App() {
    const {darkTheme} = useDarkTheme();
    useEffect(() => {
        document.body.classList.toggle('dark', darkTheme);
    }, [darkTheme]);

    return (
        <div
            className="font-sans bg-white flex flex-col dark:bg-neutral-900 dark:text-white h-full w-full">
            <Header logo={darkTheme ? darkLogo : lightLogo}/>
            <main className="px-4">
                <div className="flex flex-col">
                    <h1 className="text-6xl">Blog Readme </h1>
                    <p className="text-2xl">My road to IT </p>
                </div>
                <p className="text-xs text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusantium aliquam asperiores autem beatae
                    commodi consequatur consequuntur excepturi fuga minus nemo non obcaecati perspiciatis temporibus velit,
                    vitae voluptate! At consectetur exercitationem libero nulla vel! Aperiam aut cum dolorem exercitationem
                    labore, laboriosam minus nemo nisi officia quo reiciendis rem repellendus rerum? Aliquam architecto
                    assumenda consequatur cupiditate distinctio dolore dolores eius eos explicabo fugit harum inventore
                    labore laboriosam laudantium natus nesciunt, omnis porro quae quam quidem quod ratione repellat saepe,
                    sequi soluta sunt tenetur ullam vel velit voluptatum? Accusamus architecto assumenda beatae blanditiis
                    consectetur consequatur dolor dolores ducimus earum eius enim eum incidunt, inventore mollitia nam neque
                    non nulla pariatur quia quibusdam quidem quos ratione reiciendis rem repellendus rerum, sapiente sequi
                    soluta totam voluptates! Amet corporis debitis dignissimos dolorum id illum ipsum magnam, minima natus
                    odit officiis, perferendis placeat quaerat repellendus sunt suscipit tempora tempore tenetur, voluptates
                    voluptatibus. Atque consequatur doloribus ducimus earum odio recusandae vitae. Alias amet explicabo
                    quidem repellendus veniam? A alias aliquid amet animi autem beatae corporis culpa debitis delectus
                    deleniti doloremque eaque earum excepturi facere fugiat fugit id maiores molestiae mollitia neque non
                    obcaecati perferendis placeat, porro provident quae quaerat quas quia sed similique sit sunt, suscipit
                    temporibus totam veniam veritatis voluptatibus? Alias eligendi hic nam perspiciatis quam quos
                    recusandae. Deleniti ea expedita hic labore laborum, nemo non nostrum ut. Dolor explicabo fugiat id
                    praesentium quae ratione rerum temporibus tenetur unde vel. Accusantium consequatur doloribus eaque enim
                    facilis hic inventore necessitatibus perferendis placeat ratione rem, sint ullam. A accusamus asperiores
                    aspernatur beatae blanditiis commodi consequuntur cumque delectus doloribus ducimus eos et expedita hic
                    impedit incidunt, iusto, laboriosam libero magnam magni maiores molestias nemo, nostrum quaerat quas
                    quasi quisquam repellat reprehenderit sequi tenetur voluptates! Accusantium ad blanditiis commodi cumque
                    ducimus ea eaque eligendi error ex facilis fuga harum illum in incidunt inventore ipsa itaque iure iusto
                    maiores minima modi molestias nam numquam odit omnis optio pariatur possimus, quia quidem reiciendis
                    repellendus repudiandae tempora totam unde ut vitae voluptatum! Ab consequuntur culpa cupiditate dolorum
                    eos et eveniet facilis, id ipsa iure quasi, sunt ullam voluptate? Adipisci aliquid commodi esse fuga
                    quaerat quasi repellat voluptate! Consequatur, dolor dolore ducimus eum incidunt iste labore maxime
                    minus molestias nesciunt nulla omnis placeat quae quidem quos reiciendis repellendus tempore vitae?
                    Distinctio doloremque esse pariatur provident saepe? Ad doloremque illo labore quaerat quo suscipit ut,
                    vel. A ab ad, dicta ducimus impedit labore nisi. Accusamus aspernatur consectetur consequuntur deleniti
                    dolorum ea eligendi id illo iste laboriosam maiores minus nihil nisi nostrum, nulla, porro quasi
                    quibusdam suscipit temporibus voluptatum? Animi architecto aspernatur consectetur corporis culpa
                    cupiditate delectus dignissimos dolor eos error, esse et explicabo hic natus nesciunt nulla obcaecati
                    optio perferendis placeat possimus praesentium provident quasi quis recusandae rem reprehenderit soluta
                    tempora ullam veritatis vitae. Accusamus alias aspernatur, et facilis modi nemo nobis officia
                    recusandae. Architecto aspernatur beatae consectetur cum cumque delectus dignissimos distinctio
                    doloremque doloribus ducimus eaque eligendi enim eum ex facilis, fuga fugit ipsa nisi obcaecati officiis
                    perferendis perspiciatis qui quod rerum similique, soluta tempora tempore temporibus totam unde
                    veritatis voluptatem voluptatibus voluptatum? A consectetur consequuntur culpa earum maxime
                    necessitatibus non numquam perferendis provident sequi. Amet asperiores assumenda at deleniti, deserunt,
                    eaque earum enim excepturi facilis fuga itaque molestias nihil officia, perferendis perspiciatis quasi
                    reiciendis soluta voluptas? Accusantium assumenda, consequatur consequuntur dignissimos dolore esse est
                    ex facere id itaque nostrum placeat quas quasi qui totam ullam veritatis vitae. Assumenda dolore dolorum
                    nam sed voluptatum. Ad at, cupiditate delectus deleniti expedita id illo ipsa laudantium minima
                    molestias obcaecati perferendis, possimus quae saepe sed tempore, veritatis voluptates voluptatibus?
                    Aliquam aspernatur at commodi, facere laudantium nemo odit perspiciatis porro tempora temporibus? A
                    alias aspernatur ducimus facilis fugit libero minima molestias nulla officia omnis optio rem, tenetur
                    voluptatem. Assumenda consequatur cumque facere inventore iure molestiae provident temporibus ut
                    voluptatem? A accusamus at consequatur corporis dolorem facilis in inventore iusto libero neque
                    quibusdam rem, repellat, vitae. Accusantium autem ipsum libero minima nulla numquam quam, quis. Animi
                    aut excepturi exercitationem facilis impedit molestiae perspiciatis ullam? Autem dolores fugit odio quo
                    recusandae sunt ut veritatis, voluptatibus. Amet, architecto aspernatur commodi consequuntur debitis
                    deleniti distinctio dolore doloremque error eveniet expedita fugit illo iste nihil, officia quae quas
                    rem sapiente similique soluta temp.
                </p>
            </main>
        </div>
    );
}

export default App;
