/**
 * Some acceptance testing for views
 */

describe('views/*', function(){

  it('should validate clear button view', function(done){
    require(['text!app/views/clear_button.html'], function(html){
      expect(html).to.be.a('string');
      expect(html).to.match(/buttonString/);
      expect(Em.Handlebars.compile(html)).to.not.throw(Error);
      done();
    });
  });

  it('should validate items view', function(done){
    require(['text!app/views/items.html'], function(html){
      expect(html).to.be.a('string');
      expect(html).to.match(/collection/);
      expect(html).to.match(/id="todo-list"/);
      expect(html).to.match(/Todos\.todosController/);
      expect(html).to.match(/Checkbox/);
      expect(html).to.match(/class="view"/);
      expect(html).to.match(/class="toggle"/);
      expect(html).to.match(/class="edit"/);
      expect(Em.Handlebars.compile(html)).to.not.throw(Error);
      done();
    });
  });

});
