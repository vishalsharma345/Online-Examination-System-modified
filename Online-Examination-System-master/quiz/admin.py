from django.contrib import admin
from .models import Set
from .models import Result


class SetModelAdmin(admin.ModelAdmin):
    list_display = ['set_no', 'exam_name']


admin.site.register(Set, SetModelAdmin)
admin.site.register(Result)
