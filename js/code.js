let allowedElements = [];
let sidebarElements = [];

function allowPrimaryElements(debug)
{
    if (allowedElements.length !== 0)
    {
        return;
    }

    elements.filter(
        (e) => e.primary || debug 
    ).forEach(
        (e) => allowedElements.push(e.id)
    );
}


function combine(element1, element2) {
    let results = [];
    for (let index = 0; index < elements.length; index++) {
        let element = elements[index];
        let parents = element.parents;
        if (parents.length == 0) {
            continue;
        }
        for (let parentIndex = 0; parentIndex < parents.length; parentIndex++) {
            let parent = parents[parentIndex];
            if ((element1 == parent[0] && element2 == parent[1]) || (element1 == parent[1] && element2 == parent[0])) {
                results.push(element);
            }
        }
    }
    return results;
}

function findElementByName(name) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.name.toLowerCase().trim() == name.toLowerCase().trim()) {
            // I found it
            return element;
        }
    }
    // I didn't find it
    return false;
}

function findElementById(id) {
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element.id == id) {
            return element;
        }
    }

    return false;
}

function combineByName(name1, name2) {
    const element1 = findElementByName(name1);
    const element2 = findElementByName(name2);
    if (element1 === false || element2 === false) {
        return [];
    }
    return combine(element1.id, element2.id);
}

function displayPrimaryElements()
{
    allowPrimaryElements();
    for(let i = 0; i < allowedElements.length; i++) {
        let elementId   = allowedElements[i];
        let element     = findElementById(elementId);
        let elementName = element.name;
        addToSidebar($(displayElement(elementName)).appendTo(sidebar));
    }
}

function displayAllElements()
{
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let elementName = element.name;
        $(displayElement(elementName)).appendTo('#playfield');
    }
}

function duplicateElement(element)
{
    const theName = $(element).attr('element-type');
    const theElement = displayElement(theName);
    theElement.appendTo('#playfield');
    return theElement;
}

function displayElement(elementName)
{
    // let playfield = $('#playfield');
    const theDiv = $('<div/>', {
        'class': 'element ' + elementName
    }).draggable({ stack: ".element"});

    theDiv.text(elementName);

    theDiv.dblclick(function (event) {
        const theName = $(this).attr('element-type');
        const element = displayElement(theName);
        element.appendTo('#playfield');
        // console.log(event);
    });

    theDiv.droppable({
        hoverClass: 'hovering',
        greedy: true,
        drop: function(event, ui) {
            const droppedOn = ($(this).attr('element-type'));
            const dropped = ($(ui.draggable).attr('element-type'));
            // console.log(dropped + " was dropped on " + droppedOn);

            const results = combineByName(dropped, droppedOn);
            if (results.length != 0) {
                // remove the elements
                $(this).fadeOut().remove();
                $(ui.draggable).fadeOut().remove();
            }
            for (let i = 0; i < results.length; i++) {
                displayElement(results[i].name).appendTo('#playfield');
                addToSidebar(displayElement(results[i].name));
                // console.log(results[i].name + ' was created.');
            }
        }
        
    });

    theDiv.attr('element-type', elementName);

    // theDiv.appendTo(playfield);
    return theDiv;
}

function cheat(name1, name2) {
    dropCombine(displayElement(name1), displayElement(name2));
}

function dropCombine(dropped, droppedOn)
{
    const results = combineByName(dropped.attr('element-type'), droppedOn.attr('element-type'));
    if (results.length != 0) {
        $(dropped).fadeOut().remove();
        $(droppedOn).fadeOut().remove();
    }

    results.forEach(
        (e) => {
            const element = displayElement(e.name)
            element.appendTo('#playfield');
            addToSidebar(element);
        }
    )
}

function addToSidebar(element)
{
    // figure out if the element is in the sidebar
    // if it is, ignore
    // if not, add it
    if (! inSidebar(element)) {
        $(element).appendTo('#sidebar');
        $(element).draggable('disable');
        $(element).droppable('disable');
        element.click(function () {
            duplicateElement(element);
        });
        element.unbind('dblclick');
        sidebarElements.push($(element).attr('element-type'));
        playSound('glass_ping');
        doScore();
    } else {
        playSound('shells_fall');
    }
}

function inSidebar(element)
{
    const elementName = $(element).attr('element-type');
    
    return sidebarElements.find(
        (e) => elementName === e
    ) !== undefined
}

function initializeGame()
{
    allowPrimaryElements();
    prepareGarbage();
    doScore();
}

function prepareGarbage()
{
    $('#trash').droppable({
        drop: function(event, ui) {
            const dropped = $(ui.draggable);
            $(dropped).toggle('explode').remove();
            playSound('no_want');
        }
    });
    $('#trash').dblclick(function() {
        $('#playfield .element').toggle('explode').remove();
        playSound('fart');
    });
}

function doScore()
{
    $('#points').text(sidebarElements.length);
    $('#total_elements').text(elements.length);

    if (sidebarElements.length == elements.length) {
        playSound('applause');
    }
}

$(function() {
    initializeGame();

    displayPrimaryElements();
});

const sounds = [];


function playSound(sound)
{
    if (typeof sounds[sound] == 'undefined')
    {
        sounds[sound] = new Audio('sounds/' + sound + '.mp3');
    }
    sounds[sound].play();
}
