# Generated by Django 3.2 on 2022-09-02 00:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=50)),
                ('location', models.CharField(default='', max_length=50)),
                ('lat', models.FloatField(default='')),
                ('lan', models.FloatField(default='')),
                ('mapoverlat', models.FloatField(default='')),
                ('mapoverlan', models.FloatField(default='')),
                ('facilities', models.TextField(default='')),
                ('info', models.TextField(default='')),
                ('moreinfo', models.TextField(default='')),
                ('maplink', models.CharField(default='', max_length=15)),
                ('mapthumb', models.CharField(default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='place')),
                ('place', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='photo', to='main.place')),
            ],
        ),
    ]
