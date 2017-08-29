describe('Filters', function(){
    beforeEach('reverse', function(){
        var reverse;
        beforeEach(inject(function($filter){
            reverse = $filter('reverse',{});
        }));
        it('Should reverse a string', function(){
            expect(reverse('jon')).toBe('noj');
            expect(reverse('hello')).toBe('olleh');
            
        })
    })
})