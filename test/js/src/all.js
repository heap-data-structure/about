
var heapspec = require( "aureooms-js-heap-spec" ) ;

var heapswithreferences = [


	[ "__BinomialHeap__, BinomialTreeWithParent" , function ( compare ) {

		return new ( heap.__BinomialHeap__( heap.BinomialTreeWithParent ) )( compare ) ;

	} ] ,

	["DAryHeap, unary", function ( compare ) {
		return new heap.DAryHeap( 1 , compare ) ;
	} ],
	["DAryHeap, binary", function ( compare ) {
		return new heap.DAryHeap( 2 , compare ) ;
	} ],
	["DAryHeap, ternary", function ( compare ) {
		return new heap.DAryHeap( 3 , compare ) ;
	} ],
	["DAryHeap, 4-ary", function ( compare ) {
		return new heap.DAryHeap( 4 , compare ) ;
	} ],
	["DAryHeap, 5-ary", function ( compare ) {
		return new heap.DAryHeap( 5 , compare ) ;
	} ]


] ;

var heapswithoutreferences = [

	[ "__BinomialHeap__, BinomialTree" , function ( compare ) {

		return new ( heap.__BinomialHeap__( heap.BinomialTree ) )( compare ) ;

	} ] ,
	["DAryHeapWithoutReferences, unary", function ( compare ) {
		return new heap.DAryHeapWithoutReferences( 1 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, binary", function ( compare ) {
		return new heap.DAryHeapWithoutReferences( 2 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, ternary", function ( compare ) {
		return new heap.DAryHeapWithoutReferences( 3 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, 4-ary", function ( compare ) {
		return new heap.DAryHeapWithoutReferences( 4 , compare ) ;
	} ],
	["DAryHeapWithoutReferences, 5-ary", function ( compare ) {
		return new heap.DAryHeapWithoutReferences( 5 , compare ) ;
	} ]
] ;

var lazyheaps = [

	[ "__LazyBinomialHeap__, BinomialTree" , function ( compare ) {

		return new ( heap.__LazyBinomialHeap__( heap.BinomialTree ) )( compare ) ;

	} ] ,
	[ "__LazyBinomialHeap__, BinomialTreeWithParent" , function ( compare ) {

		return new ( heap.__LazyBinomialHeap__( heap.BinomialTreeWithParent ) )( compare ) ;

	} ]
] ;

heapspec.test( heapswithreferences , true ) ;
heapspec.test( heapswithoutreferences , false ) ;
heapspec.pushpop( lazyheaps ) ;
heapspec.merge( lazyheaps ) ;
