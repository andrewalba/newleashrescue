/**
 * User: andrew.alba
 * Date: 5/26/15
 * Copyright 2015 The Lacek Group. All rights reserved.
 */
if( typeof(ALBA) === "undefined" || ALBA === null ){
	ALBA = {};
}
ALBA.PetFinder = function(){
	"use strict";

	// PRIVATE VARS
	var pft,
		animalSex = {
			'M':'Male',
			'F':'Female'
		},
		animalSize = {
			'S':'Small',
			'M':'Medium',
			'L':'Large',
			'XL': 'Extra-Large'
		},
		shelterId='MN17';

	// DOM ELEMENTS
	var $body,
		$animal,
		$breed,
		$searchForm,
		$searchBtn,
		$searchResults,
		$petFinderTable,
		$eImgage;

	/**
	 * Register Dom Elements when called
	 */
	function registerDomElements() {
		$body = $('body');
		$animal = $(':input[name="animal"]');
		$breed = $(':input[name="breed"]');
		$searchForm = $('form#find');
		$searchBtn = $('button[type="submit"]');
		$searchResults = $('#searchResults');
		$petFinderTable = $('#petFinderTable');
		$eImgage=$('[rel="enlargeimage"]');
	}

	/**
	 * Listeners for page on load
	 */
	function addListeners() {
		$animal.on('change', function(ev){
			ev.preventDefault();
			if ($(this).val() !== '');
			$.getJSON('breed/'+$(this).val(), function(data){
				var breeds = data.petfinder.breeds.breed,
					breedDisabled = $breed.attr('disabled');
				if (breeds.length) {
					// clear current breeds
					$breed.empty();
					// insert placeholder
					$breed.append('<option value="">All Breeds</option>');
					// insert new values
					for (var i= 0; i < breeds.length; i++) {
						$breed.append('<option>' + breeds[i].$t + '</option>');
					}
					// if $breed is disabled, enable
					if (typeof breedDisabled !== typeof undefined && breedDisabled !== false) {
						$breed.removeAttr('disabled');
					}
				}
			})
		});

		$searchBtn.on('click', function(ev) {
			ev.preventDefault();
			$searchForm.submit(searchSubmit($searchForm));
		});

		/*$('#detailModal').on('show.bs.modal', function (event) {
			var link = $(event.relatedTarget),
				$petData = link.data('pet'),
				$modal = $(this);

			var $row = $('<div></div>').addClass('row'),
				$col = $('<div></div>').addClass('col-md-12'),
				$thumbNail = $('<div></div>').addClass('thumbnail'),
				$imgCarousel = buildImgCarousel($petData),
				$caption = $('<div></div>').addClass('caption'),
				$description = '<p>' + $petData.description + '</p>',
				$description = $description.replace(/\n{2}/g, "</p><p>");
				$description = $description.replace(/\n/g, "<br />");

			if ($petData.breeds.length) {
				var $captionH3 = $('<h3></h3>').text($petData.breeds);
				$caption.append($captionH3);
			}
			$caption.append($description);
			$row.append($col.append($thumbNail.append($imgCarousel).append($caption)));

			$modal.find('.modal-title').text($petData.name);
			$modal.find('.modal-body').empty().append($row);
		});*/
		if ($petFinderTable.length) {
			pft = $petFinderTable.DataTable({
				lengthMenu:[15,25,50],
				pageLength:15,
				order:[[2,'asc']],
				columnDefs: [
					{ orderable: false, targets: [0, 1] }
				],
				dom: 'lfrti<"poweredby">p',
				fnCreatedRow: function(nRow,aData,iDataIndex) {
					// add aData to link elements as pet
					$(nRow).find('td:eq(0) a').data('pet',aData);
					/*$(nRow).find('.img-thumb').on("mouseover", function () {
						$.each($('.display-image'),function(i,e) {
							if ($(e).is(':visible')) {
								$(e).css({zIndex:-10}).fadeTo(600, 0);
							}
						});
						$(this).next('div').css({marginTop: -($(this).next('div').find('img').height()/2) + 'px',zIndex: 1010}).fadeTo(600, 1);
					});*/
					/*$(nRow).find('.img-thumb').on('blur', function() {
						$(this).next('div').css({zIndex:-10}).fadeTo(600, 0);
					});*/
				},
				responsive: true,
				fnInitComplete: function() {
					$.each($('.tv'), function(i, e) {
						var $imgHref = $(e).next('span').data('href');
						$(e).attr({href:$imgHref}).addthumbnailviewer2({targetdiv:'petLgImg'});
					});
					/*var $imgHref=$('.tv').find('span').data('href');

					$('.tv').attr({href:$imgHref}).addthumbnailviewer2({targetdiv:'petLgImg'});*/
				}
			});
			$('#petFinderTable_info').append($("div.poweredby").html('Powered by <a href="https://www.petfinder.com/" target="_blank" title="Petfinder">Petfinder</a><span><sub>TM</sub></span>'));
			resizeThumbnails();
		}
	}
	/* helper functions */
	/**
	 * create the image carousel
	 * @param $data
	 * @returns {*}
	 */
	function buildImgCarousel($data) {
		var $carousel = $('<div></div>').addClass('carousel slide').attr({id:'imgCarousel','data-ride':'carousel'}),
			$indicator = $('<ol></ol>').addClass('carousel-indicators'),
			$carouselInner = $('<div></div>').addClass('carousel-inner').attr({role:'listbox'}),
			$ctrlLeft = $('<a></a>').addClass('left carousel-control').attr({href:'#imgCarousel',role:'button','data-slide':'prev'}),
			$glyphLeft = $('<span></span>').addClass('glyphicon glyphicon-chevron-left').attr({'aria-hidden':true}),
			$prev = $('<span></span>').addClass('sr-only').text('Previous'),
			$ctrlRight = $('<a></a>').addClass('right carousel-control').attr({href:'#imgCarousel',role:'button','data-slide':'next'}),
			$glyphRight = $('<span></span>').addClass('glyphicon glyphicon-chevron-right').attr({'aria-hidden':true}),
			$next = $('<span></span>').addClass('sr-only').text('Next'),
			$imgSrcArray=$.grep($data.photos, function(e){ return e.imgSize === 'x'; });// width {fmp:95px, pn:300px, x 500px}


		$.each($imgSrcArray, function(i, e) {
			var $li = $('<li></li>').attr({'data-target':'#imgCarousel','data-slide-to':i});
			if(i===0){
				$li.addClass('active');
			}
			$indicator.append($li);
			var $item = $('<div></div>').addClass('item').css({background: 'center url(' + e.src + ')','background-size':'cover'});
			if(i===0){
				$item.addClass('active');
			}
			$carouselInner.append($item);
		});
		if ($imgSrcArray.length > 1) {
			return $carousel.append($indicator).append($carouselInner).append($ctrlLeft.append($glyphLeft).append($prev)).append($ctrlRight.append($glyphRight).append($next));
		}
		else {
			return $carousel.append($carouselInner);
		}
	}

	/**
	 * resize thumbnails on pet finder table
	 */
	function resizeThumbnails() {
		$.each($('.thumbnail > img'), function(i,v){
			$(v).backstretch($(v).attr('src'));
		})
	}

	/**
	 * build thumbnail container
	 * @param $holder
	 * @param $data
	 * @param $idx
	 */
	function buildThumbnailContainer($holder, $data, $idx) {
		try {
			var $divContainer = $('<div></div>').addClass('col-sm-6 col-md-2'),
				$divThumbnail = $('<div></div>').addClass('thumbnail'),
				$petImg = $('<img/>').addClass('img-rounded').attr({alt: $data.name}),
				$divCaption = $('<div></div>').addClass('caption'),
				$h5 = $('<h5></h5>').text($data.name),
				$description = $('<p></p>').html($data.description),
				$ul = $('<ul></ul>').addClass('list-unstyled'),
				$breeds = $data.breeds.join(', '),
				$options = $data.options.join(', '),
				$imgSrcArr = $.grep($data.photos, function(e){ return e.imgSize === 'pn'; }),
				$imgXSrcArr = $.grep($data.photos, function(e){ return e.imgSize === 'x'; });

			if ($idx % 5 === 0) {
				$divContainer.addClass('col-md-offset-1');
			}

			if ($imgSrcArr.length > 1) {
				$imgSrcArr = $.grep($imgSrcArr, function(e) { return e.id === '1'; });
			}
			if ($imgXSrcArr.length > 1) {
				$imgXSrcArr = $.grep($imgXSrcArr, function(e) { return e.id === '1'; });
			}
			$petImg.attr('src',$imgSrcArr[0].src);
			$divContainer.append($($divThumbnail).append($petImg).append($divCaption.append($h5)));
			$divContainer.data({description: $description,lgImg: $imgXSrcArr[0].src});
			$holder.append($divContainer);
		}
		catch(e) {
			console.log(e);
		}
	}

	/**
	 * process Pet Finder results
	 * @param pet
	 * @param animal
	 * @returns {Array}
	 */
	function processPetResults(pet, animal) {
		var pets = [],
			filterByAnimal = animal !== '';
		for (var i=0; i < pet.length; i++) {
			var breeds = [],
				photos = [],
				options = [];

		if((filterByAnimal && pet[i].animal.$t.toLowerCase() === animal) || !filterByAnimal) {
			if (pet[i].hasOwnProperty('breeds')) {
				for (var j=0; j < pet[i].breeds.breed.length; j++) {
					breeds.push(pet[i].breeds.breed[j].$t);
				}
			}
			if (pet[i].hasOwnProperty('media') && pet[i].media.hasOwnProperty('photos')) {
				for (var k=0; k < pet[i].media.photos.photo.length; k++) {
					var photo = {};
					photo.id = pet[i].media.photos.photo[k]['@id'];
					photo.imgSize = pet[i].media.photos.photo[k]['@size'];
					photo.src = pet[i].media.photos.photo[k].$t;
					photos.push(photo);
				}
			}
			if (pet[i].hasOwnProperty('options') && pet[i].options.hasOwnProperty('option') && pet[i].options.option.length) {
				for (var l=0; l < pet[i].options.option.length; l++) {
					options.push(pet[i].options.option[l].$t);
				}
			}
			var p = {
				age: pet[i].age.$t,
				animal: pet[i].animal.$t,
				breeds: breeds,
				description: pet[i].description.$t,
				id: pet[i].id.$t,
				mix: pet[i].mix.$t,
				name: pet[i].name.$t,
				options: options,
				sex: pet[i].sex.$t,
				shelterId: pet[i].shelterId.$t,
				animalSize: pet[i].size.$t,
				status: pet[i].status.$t,
				photos: photos
			};
			pets.push(p);
		}
		}
		return pets;
	}
	/**
	 * Find animals based on criteria listed in Pet->find() method
	 * @param formEl
	 * @returns {boolean}
	 */
	function searchSubmit(formEl) {
		// clear errors
		clearErrors(formEl);
		var spinnerOpt = { lines: 11, length: 20, width: 10, radius: 30, color: '#000' };
		$body.css({opacity:0,display:'block'});
		$body.fadeTo(100,0.7).spin(spinnerOpt);
		$.getJSON(formEl.attr('action'), formEl.serialize(), null, 'json').success(function(json) {
			if (json.hasOwnProperty('petfinder') && json.petfinder.pets.pet.length) {
				var pet = json.petfinder.pets.pet,
					petArr = processPetResults(pet);
				if (petArr.length) {
					$searchResults.empty();
					for(var p=0; p < petArr.length; p++) {
						if (petArr[p].shelterId === shelterId)
							buildThumbnailContainer($searchResults, petArr[p], p);
					}
				}
				if (json.petfinder.hasOwnProperty('lastOffset')) {
					$searchResults.attr('data-offset', json.petfinder.lastOffset.$t).data('offset', json.petfinder.lastOffset.$t);
				}
			}
			else {
				// figure this out
				// ajaxError(json.errors)
			}
			$body.spin(false).fadeTo(100, 1);
		}).fail(function(){
			$body.spin(false).fadeTo(100, 1);
		});
		return false;
	}

	/**
	 * Appends error labels based on errors returned in ajax call
	 * @param errors
	 */
	function ajaxError(errors) {
		var focusEl,
			$ul=$('<ul></ul>').addClass('list-unstyled text-danger');
		for (var error in errors) {
			if (errors.hasOwnProperty(error)) {
				if( $(':input[name="' + error + '"]').length ){
					$(':input[name="' + error + '"]').parents('.form-group').addClass('has-error')
					if( typeof focusEl === 'undefined' ) {
						focusEl = error;
					}
				}
				var inlineError = $('#'+error+'Error');
				if (inlineError.length) {
					inlineError.show();
				}
				$ul.append('<li>' + errors[error] + '</li>');
			}
		}
		if( typeof focusEl !== 'undefined' ){
			var offset = $(':input[name="' + focusEl + '"]').offset();
			window.scroll(0, offset.top);
		}
		$('.errorMessage').append($ul).show();
	}
	/**
	 * clears any error on form element
	 * @param inputEl
	 */
	function clearError(inputEl) {
		if ($(inputEl).parents('.form-group').hasClass('has-error')) {
			$(inputEl).parents('.form-group').removeClass('has-error');
		}
	}
	/**
	 * clears error and error messages on form
	 * @param formEl
	 */
	function clearErrors(formEl) {
		$(':input',formEl).each(function() {
			if ($(this).parents('.form-group').hasClass('has-error')) {
				$(this).parents('.form-group').removeClass('has-error');
			}
		});
		if ($('.errorMessage', formEl).length) {
			$('.errorMessage', formEl).empty();
		}
	}
	/**
	 * extends out the spin.js
	 * @param opts
	 * @returns {$.fn}
	 */
	$.fn.spin = function(opts) {
		this.each(function() {
			var $this = $(this),
				data = $this.data();
			if (data.spinner) {
				data.spinner.stop();
				delete data.spinner;
			}
			if (opts !== false) {
				data.spinner = new Spinner(opts).spin(this);
			}
		});
		return this;
	};

	return {
		init: function() {
			registerDomElements();
			addListeners();
		},
		shelterGetPet: function(animal) {
			shelterGetPetsTable(animal);
		}
	};
}();