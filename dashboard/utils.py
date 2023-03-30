from collections import defaultdict

from wagtail.admin.panels import FieldPanel, MultiFieldPanel

from common.edit_handlers import HelpPanel, MultiFieldPanel as CustomMultiFieldPanel


def InstructionsPanel():
    return MultiFieldPanel(
        [
            FieldPanel('instructions_heading'),
            FieldPanel('instructions'),
            FieldPanel('instruction_position'),
        ],
        heading='Interactive visualisation instructions',
    )


def CaptionPanel():
    return FieldPanel('caption')


def SpecificInstructionsPanel():
    return MultiFieldPanel(
        [
            HelpPanel('''
                Optional: if the checkbox is selected, the general instructions from the parent page will be displayed.<br>
                Specific instuctions added to this page will be displayed, overriding this setting.
            ''', wrapper_class='help-block help-info no-padding-top'),
            FieldPanel('display_general_instructions'),
            FieldPanel('instructions_heading'),
            FieldPanel('instructions'),
            FieldPanel('instruction_position'),
        ],
        heading='Interactive visualisation instructions',
    )

def FallbackImagePanel():
    return MultiFieldPanel([
            FieldPanel('fallback_image'),
            FieldPanel('display_fallback_mobile'),
            FieldPanel('display_fallback_tablet'),
            FieldPanel('alternative_text'),
        ], heading='Fallback image and options')


def get_downloads(instance, with_parent=False, data=False):
    d = defaultdict(list)
    downloads = instance.data_downloads.all() if data else instance.dashboard_downloads.all()

    for item in downloads:
        download = create_download(item)
        if download[1]['download'] is not None:
            d[download[0]].append(download[1])

    if with_parent:
        if data:
            parent_downloads = instance.get_parent().specific.data_downloads.all()
        else:
            parent_downloads = instance.get_parent().specific.dashboard_downloads.all()

        for item in parent_downloads:
            download = create_download(item)
            d[download[0]].append(download[1])

    return d.items()


def create_download(item):
    download = {
        'prefix': '',
        'download': item.download
    }

    try:
        language = item.download.language.title
    except AttributeError:
        language = ''

    return (language, download, )


def ContentPanel(heading='Content', description='Main content for the page. Build page content by adding new rows from the available content types.'):
    return CustomMultiFieldPanel(
        [
            FieldPanel('content'),
        ],
        heading=heading,
        description=description,
    )


def PublishedDatePanel():
    return CustomMultiFieldPanel(
        [
            FieldPanel('published_date'),
        ],
        heading='Published date',
        description='Date information for this page.',
    )


def UUIDPanel():
    return FieldPanel('uuid')


def StateMixinPanel():
    return FieldPanel('use_state')


def HeroButtonPanel(heading='Hero Button Captions', description='Edit captions for hero buttons'):
    return CustomMultiFieldPanel(
        [
            FieldPanel('download_button_caption'),
            FieldPanel('read_online_button_text'),
            FieldPanel('request_hard_copy_text'),
        ],
        heading=heading,
        description=description
    )


def get_selected_or_fallback(selected=None, fallback=None, max_length=None, order=None) -> list:
    if not selected:
        selected = []
    else:
        # return actual page object instead of through model
        selected = [x.related for x in selected]

    fallbacks = []
    if fallback:
        try:
            fallbacks = fallback
            if selected:
                fallbacks = fallbacks.exclude(
                    id__in=[x.id for x in list(selected)]
                ).live().specific()
            if order:
                fallbacks = fallbacks.order_by(order)
        except AssertionError as e:
            if 'Cannot filter a query once a slice has been taken' in str(e):
                raise Exception('Cannot filter a query once a slice has been taken. \
                             Use the max_length argument if you want to limit the amount returned')

    if not max_length:
        return list(selected) + list(fallbacks)
    else:
        return list(list(selected) + list(fallbacks))[:max_length]


def get_children_or_none(page_query):
    if not page_query:
        return None

    return page_query.get_children().live()


def get_first_child_of_type(parent, child_class):
    return (
        parent.get_children()
        .type(child_class)
        .live()
        .specific()
        .first())


def get_ordered_children_of_type(parent, child_class, order):
    return (
        parent.get_children()
        .type(child_class)
        .live()
        .order_by(order)
        .specific())


def get_specific_related(queryset):
    '''Return related pages from through table queryset.'''
    if not queryset:
        return None

    return [x.related.specific for x in queryset if x.related and x.related.live]
