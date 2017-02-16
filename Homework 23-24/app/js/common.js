function Model(data) {
    let self = this;
    self.data = data;

    self.editItem = function(item, newitem) {
        if (item.length === 0) {
            return;
        }
        let index = self.data.indexOf(item);
        self.data.splice(index, 1, newitem);
        return self.data;
    };

    self.addItem = function(item) {
        if (item.length === 0) {
            return;
        }
        self.data.push(item);
        return self.data;
    };

    self.removeItem = function(item) {
        let index = self.data.indexOf(item);
        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);
        return self.data;
    };
}

function View(model) {
    let self = this;

    function init() {
        const wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);
        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
        };
        self.renderList(model.data);
    }

    self.renderList = function(data) {
        const list = tmpl($('#list-template').html(), {
            data: data
        });
        self.elements.listContainer.html(list);
    };

    init();
}

function Controller(model, view) {
    let self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);

    function addItem() {
        let newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function editItem() {
        let item = $(this).attr('data-value');
        let editField = $(`<input type="text" class="item-editField" value="${item}">`);
        let editBtn = $(`<img src="img/edit.svg">`);
        $(this).parent().html('').append(editField).append(editBtn);
        editBtn.on('click', function() {
            model.editItem(item, editField.val());
            view.renderList(model.data);
        });
    }

    function removeItem() {
        let item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    }
}

$(function() {
    let firstToDoList = ['Task 1', 'Task 2', 'Task 3'];
    let model = new Model(firstToDoList);
    let view = new View(model);
    let controller = new Controller(model, view);
});
