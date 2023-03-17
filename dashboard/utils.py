from wagtail.admin.panels import FieldPanel, MultiFieldPanel

from common.edit_handlers import HelpPanel


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
