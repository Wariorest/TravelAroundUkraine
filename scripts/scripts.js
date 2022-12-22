

const createModalImgElem = (imgPath)=>{
    let img = document.createElement("img");
    img.src = imgPath;
    return img;
}

const createModalHeader = (headerContent,headerSize = "h3")=>{
    let header =  document.createElement(headerSize);
    header.textContent = headerContent;

    return header;
}

const createModalParagraph = (modalTextContent = "")=>{
    let paragraph = document.createElement("p");
    paragraph.textContent = modalTextContent;

    return paragraph;
}

const createModalFadeBlock = (modalID = "")=>{
    let modalFade = document.createElement("div");
    modalFade.className = "modal fade";
    modalFade.id = modalID;
    modalFade.ariaRoleDescription = "dialog";

    return modalFade;
}

//create modal-dialog block
const createModalDialogBlock = ()=>{
    let modalDialog = document.createElement("div");
    modalDialog.className = "modal-dialog";

    return modalDialog;
}


const createModalElement = (imgPath, headerContent, modalDescription, mID)=>{

    //create modal-content block
    const createModalContentBlock = ()=>{
        let modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        return modalContent;
    }

    //create modal-header block
    const createModalHeaderBlock = (headerText)=>{
        let modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML =
            `<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>`+
            `<h4 class=\"modal-title\">${headerText}</h4>`;
        return modalHeader;
    }



    //create modal-body block with content
    const createModalBodyBlock = (imgPath, modalText, dataTargetID)=>{
        let modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modalBody.id = dataTargetID;
        modalBody.ariaRoleDescription = "dialog";


        const img = createModalImgElem(imgPath);
        const paragraph = createModalParagraph(modalText);
        modalBody.insertAdjacentElement("afterbegin", img);
        modalBody.insertAdjacentElement("beforeend", paragraph);

        return modalBody;
    }
    const createModalFooter = ()=>{
        let modalFooter = document.createElement("div");
        modalFooter.className = "modal-footer";
        modalFooter.innerHTML ="<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>";

        return modalFooter;
    }
    const makeCompositeModal = (imgP, headerText, mPar, id)=>{
        let modal = createModalFadeBlock(id);
        let mDialog = createModalDialogBlock();
        let mContent = createModalContentBlock();
        let mHeader = createModalHeader(headerText)
        let mBody = createModalBodyBlock(imgP,mPar, id);
        let mFtr = createModalFooter();

        mContent.insertAdjacentElement("afterbegin", mHeader);
        mContent.insertAdjacentElement("beforeend", mBody);
        mContent.insertAdjacentElement("beforeend", mFtr);

        mDialog.insertAdjacentElement("afterbegin", mContent);
        modal.insertAdjacentElement("afterbegin", mDialog);


        return modal;
    }
    let compositedModal = makeCompositeModal(imgPath, headerContent, modalDescription, mID);

    return compositedModal
}
let elem1 = document.querySelector("#item1");
elem1.addEventListener('click',()=>{
    let elem = createModalElement("src/img/photo_1.jpg",
        "Церква Воскресіння Христового",
        "Церква над селищем Форос, побудована в 1892 р. " +
        "на Червоній скелі. Висота будови над рівнем моря " +
        "становить 412 метрів. Пам'ятник слов'янської архітектури " +
        "кінця XIX століття.  Фороська церква виконана в стилі давньоруської " +
        "архітектури. Добиратися до неї потрібно по крутій серпантинній дорозі." +
        " Але воно того варте. До того ж з оглядового майданчика Фороської Воскресенської церкви " +
        "відкривається незабутній кримський пейзаж.",
        "churchChrist");

    let containerElem = document.querySelector(".modal-content--item");
    containerElem.insertAdjacentElement("beforeend", elem);

});

let elem2 = document.querySelector("#item2");
elem2.addEventListener("click",()=>{
    let elem = createModalElement(
        "src/img/photo_2.jpg",
        "Ластівчине гніздо",
        "Ластівчине гніздо нагадує середньовічний замок, тільки дуже маленький, іграшковий." +
        " Для Криму ця фотографія є своєрідним негласним символом туризму\n" +
        " Ластівчине гніздо відображене в декількох фільмах, а найвідоміша його роль " +
        "- у картині \"Десять негренят\" за мотивами твору Агати Крісті. Мало хто знає," +
        " що в Криму знімалися епізоди фільму \"Перший удар\" з Джекі Чаном, один з них біля Ластівчиного гнізда." +
        " Сам замок розташований на стрімкій 40-метровій Аврориній скелі мису Ай-Тодор в селищі Гаспра, " +
        "розташованому недалеко від Великої Ялти - Гаспрі. Він виглядає дивовижно що з моря, що з дороги - " +
        "неприступно і красиво. Вид з моря у Ластівки приголомшливий..",
        "nestCastle"
    );
    let containerElem = document.querySelector(".modal-content--item");
    containerElem.insertAdjacentElement("beforeend", elem);
})
let elem3 = document.querySelector("#item3");
elem3.addEventListener("click",()=>{
    let elem = createModalElement(
        "src/img/photo_3.jpg",
        "Сиваш",
        "Сиваш — система дрібних мілководних " +
        "(максимальна глибина до 3,5 м) " +
        "заток на західному березі Азовського моря, " +
        "між Херсонською областю та Кримом.  Насправді Сиваш" +
        " - це не озеро, а західна протока Азовського моря. " +
        "У ньому живе Dunaliella salina - одноклітинна водорість, " +
        "яка і надає воді рожевого забарвлення. Плавати тут приємно, " +
        "адже солона вода тримає вас на поверхні.",
        "sivash"
    );
    let containerElem = document.querySelector(".modal-content--item");
    containerElem.insertAdjacentElement("beforeend", elem);
});

let elem4 = document.querySelector("#item4");
elem4.addEventListener("click",()=>{
    let elem = createModalElement(
        "src/img/photo_4.jpg",
        "Хомуто́вський степ",
        "Хомуто́вський степ — відділення Українського" +
        " державного степового заповідника НАН України," +
        " розташоване в Бойківському районі Донецької області," +
        " на кордоні з Ростовською областю Росії, за 20 км " +
        "від узбережжя Азовського моря.У заповіднику є музей " +
        "(експонати місцевої фауни та флори розділені за чотирма " +
        "порами року).\n" +
        "Територія заповідника є ділянкою хвилястої " +
        "Приазовської рівнини, що поступово знижується до " +
        "поділу річки Грузький Єланчик, на лівому березі якої" +
        " протягнулися заповідні землі. Місцевість перерізують " +
        "розгалужені балки Клімушевська, Брандтова, Красна. " +
        "Хомутовський степ — єдина збережена ділянка " +
        "різнотравно-типчаково-ковилових степів Приазов'я, " +
        "в складі рослинності яких домінують ковила Лессінґа, " +
        "ковила волосиста і типчак. Серед різнотрав'я багато рідкісних" +
        " рослин: воронець, катран татарський, тюльпан Шренка, " +
        "калофака волзька та інші. На вапнякових відслоненнях ростуть" +
        " ендеміки: дрік скіфський, льон Черняєва й інші. " +
        "Всього в заповіднику налічується близько 550 видів рослин, " +
        "серед яких 50 рідкісних",
        "homutovskyStep"
    );
    let containerElem = document.querySelector(".modal-content--item");
    containerElem.insertAdjacentElement("beforeend", elem);
})