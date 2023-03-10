"""
Django settings for di_website project.

Generated by 'django-admin startproject' using Django 2.2.2.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
import dj_database_url
from decouple import config
import dotenv

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)

ADMINS = [
    ('Edwin', 'edwin.magezi@devinit.org'),
    ('Alex', 'alex.miller@devinit.org'),
    ('David', 'david.ebukali@devinit.org'),
    ('Chris', 'chrisw@devinit.org')
]


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/


# Application definition

INSTALLED_APPS = [
    'di_website.footnotes',
    'di_website.home',
    'di_website.users',
    'di_website.search',
    'di_website.ourteam',
    'di_website.common',
    'di_website.vacancies',
    'di_website.blog',
    'di_website.news',
    'di_website.events',
    'di_website.place',
    'di_website.contactus',
    'di_website.about',
    'di_website.general',
    'di_website.project',
    'di_website.whatwedo',
    'di_website.publications',
    'di_website.downloads',
    'di_website.workforus',
    'di_website.datasection',
    'di_website.api',
    'di_website.spotlight',
    'di_website.visualisation',
    'di_website.dashboard',

    'wagtail.contrib.forms',
    'wagtail.contrib.redirects',
    'wagtail.contrib.settings',
    'wagtail.contrib.styleguide',
    'wagtail.contrib.table_block',
    'wagtail.contrib.search_promotions',
    'wagtail.contrib.routable_page',
    'wagtail.embeds',
    'wagtail.sites',
    'wagtail.users',
    'wagtail.snippets',
    'wagtail.documents',
    'wagtail.images',
    'wagtail.search',
    'wagtail.admin',
    'wagtail',
    'wagtaillinkchecker',
    'wagtailgeowidget',
    'wagtailmedia',

    'modelcluster',
    'taggit',
    'wagtailfontawesome',
    'widget_tweaks',
    'wagtailmetadata',
    'django_google_optimize',
    'markdownify.apps.MarkdownifyConfig',

    'django.contrib.sitemaps',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',

    'wagtail.contrib.redirects.middleware.RedirectMiddleware',
    'django_google_optimize.middleware.google_optimize',
    'di_website.custom_middleware.NullInjectionMiddleware',
]

ROOT_URLCONF = 'di_website.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(PROJECT_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'di_website.context.globals',
            ],
        },
    },
]

WSGI_APPLICATION = 'di_website.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

dotenv.read_dotenv('.env')

DATABASES = {
    'default': dj_database_url.config(default=os.environ.get('DATABASE_URL'))
}


# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

if config('ELASTIC_SEARCH_URL', ''):

    elastic_search_tokens = [
        'letter',
        'digit',
        'symbol',
    ]

    WAGTAILSEARCH_BACKENDS = {
        'default': {
            'BACKEND': 'wagtail.search.backends.elasticsearch7',
            'AUTO_UPDATE': True,
            'ATOMIC_REBUILD': True,
            'URLS': [config('ELASTIC_SEARCH_URL', '')],
            'TIMEOUT': 10,
            'INDEX_SETTINGS': {
                'settings': {
                    'analysis': {
                        'analyzer': {
                            "default": {
                                "tokenizer": "edgengram_tokenizer",
                                "filter": [ "stop_filter",  "lowercase_filter" ]
                            }
                        },
                        'filter': {
                            'stop_filter': {
                                'type': 'stop',
                                'ignore_case': True
                            },
                            'lowercase_filter': {
                                'type': 'lowercase'
                            }
                        },
                        'tokenizer': {
                            'edgengram_tokenizer': {
                                'type': 'edge_ngram',
                                'min_gram': 3,
                                'max_gram': 10,
                                'token_chars': elastic_search_tokens
                            }
                        },
                    },
                    'index': {
                        'number_of_shards': 2
                    }
                }
            }
        }
    }

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'patterns/converted-html/assets'),
    os.path.join(BASE_DIR, 'di_website/static'),
    os.path.join(BASE_DIR, 'src/assets'),
]

# ManifestStaticFilesStorage is recommended in production, to prevent outdated
# Javascript / CSS assets being served from cache (e.g. after a Wagtail upgrade).
# See https://docs.djangoproject.com/en/2.2/ref/contrib/staticfiles/#manifeststaticfilesstorage
# STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

STATIC_ROOT = os.path.join(BASE_DIR, 'assets')
STATIC_URL = '/assets/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'storage')
MEDIA_URL = '/media/'


# Wagtail settings

WAGTAIL_SITE_NAME = "Development Initiatives Website"

# Base URL to use when referring to full URLs within the Wagtail admin backend -
# e.g. in notification emails. Don't include '/admin' or a trailing slash
WAGTAILADMIN_BASE_URL = os.getenv('BASE_URL') or 'http://devinit.org'

INTERNAL_IPS = ["127.0.0.1"]

# Email settings

EMAIL_BACKEND = os.getenv('EMAIL_BACKEND') or 'django.core.mail.backends.console.EmailBackend'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST = os.getenv('EMAIL_HOST')
EMAIL_HOST_USER = os.getenv('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.getenv('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL') or 'devinitautomailer@gmail.com'
SERVER_EMAIL = DEFAULT_FROM_EMAIL

# hubspot settings
HS_API_KEY = config('HS_API_KEY', default='')
HS_TICKET_PIPELINE = config('HS_TICKET_PIPELINE', '891429')
HS_TICKET_PIPELINE_STAGE = config('HS_TICKET_PIPELINE_STAGE', '891430')

GOOGLE_MAPS_V3_APIKEY = "AIzaSyAZAIjZtkBlsF0ZqvrlkvyLfVn6Bju6bJ4"

# Celery
CELERY_BROKER_URL = os.getenv('CELERY_BROKER_URL')

# Disable update notifications on CMS
WAGTAIL_ENABLE_UPDATE_CHECK = False

# Fix for max fields error message
DATA_UPLOAD_MAX_NUMBER_FIELDS = 10000


# Patch for Youtube embed error (TODO: remove once upgraded to Wagtail 2.11+)
WAGTAILEMBEDS_FINDERS = [
    {
        'class': 'wagtail.embeds.finders.oembed',
        'providers': [
            {
                "endpoint": "https://www.youtube.com/oembed",
                "urls": [
                    r'^https?://(?:[-\w]+\.)?youtube\.com/watch.+$',
                    r'^https?://(?:[-\w]+\.)?youtube\.com/v/.+$',
                    r'^https?://youtu\.be/.+$',
                    r'^https?://(?:[-\w]+\.)?youtube\.com/user/.+$',
                    r'^https?://(?:[-\w]+\.)?youtube\.com/[^#?/]+#[^#?/]+/.+$',
                    r'^https?://m\.youtube\.com/index.+$',
                    r'^https?://(?:[-\w]+\.)?youtube\.com/profile.+$',
                    r'^https?://(?:[-\w]+\.)?youtube\.com/view_play_list.+$',
                    r'^https?://(?:[-\w]+\.)?youtube\.com/playlist.+$',
                ],
            }
        ],
        'options': {'scheme': 'https'}
    },
    {
        'class': 'wagtail.embeds.finders.oembed',
    }
]
# GitHub Token
GITHUB_TOKEN = os.getenv('GITHUB_TOKEN')

PASSWORD_REQUIRED_TEMPLATE = 'password_required.html'

DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'

WAGTAILMETADATA_IMAGE_FILTER = 'fill-800x450'

EMAIL_ADMINS_CACHE_TIMEOUT = 30
EMAIL_ADMINS_MAX_EMAILS_PER_TIMEOUT = 2
EMAIL_ADMINS_CACHE_COUNTER_KEY = 'email_admins_cache_counter_key'
