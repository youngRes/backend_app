<?php

class __Mustache_9064cd4a377daa64f715c708d11b2afc extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '
';
        $buffer .= $indent . '
';
        // 'addsection' section
        $value = $context->find('addsection');
        $buffer .= $this->section1f7306bfc6b6eec57c08fe897a40c791($context, $indent, $value);
        $buffer .= $indent . '
';
        // 'addsection' inverted section
        $value = $context->find('addsection');
        if (empty($value)) {
            
            $buffer .= $indent . '<li id="section-';
            $value = $this->resolveValue($context->find('index'), $context);
            $buffer .= $value;
            $buffer .= '" class="card section clearfix mb-4" role="region" aria-labelledby="section-';
            $value = $this->resolveValue($context->find('index'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= ' .sectionname a:not(.quickeditlink)">
';
            $buffer .= $indent . '   <div class="content card-block px-15 py-15 py-3 px-3 remui-list-content-border" aria-labelledby="section-';
            $value = $this->resolveValue($context->find('index'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= ' .sectionname a:not(.quickeditlink)">
';
            $buffer .= $indent . '      ';
            // 'highlighted' section
            $value = $context->find('highlighted');
            $buffer .= $this->sectionF2366841dafb64da058bf610489c4292($context, $indent, $value);
            $buffer .= '
';
            $buffer .= $indent . '      <div class="d-block">
';
            $buffer .= $indent . '        <div class="left side float-left">
';
            $buffer .= $indent . '          ';
            $value = $this->resolveValue($context->find('leftside'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '        </div>
';
            $buffer .= $indent . '         <div class="right side float-right d-flex">
';
            $buffer .= $indent . '           ';
            $value = $this->resolveValue($context->find('addnewsection'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '           ';
            $value = $this->resolveValue($context->find('optionmenu'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '         </div>
';
            $buffer .= $indent . '         ';
            $value = $this->resolveValue($context->find('leftside'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '      </div>
';
            $buffer .= $indent . '      <h4 class="sectionname card-title">
';
            // 'editing' section
            $value = $context->find('editing');
            $buffer .= $this->section81332f3df9a6712744ac384d0fa16689($context, $indent, $value);
            // 'editing' inverted section
            $value = $context->find('editing');
            if (empty($value)) {
                
                $buffer .= $indent . '            <a class="panel-title p-0" href="';
                $value = $this->resolveValue($context->find('singlepageurl'), $context);
                $buffer .= $value;
                $buffer .= '" aria-expanded="';
                // 'collapsed' section
                $value = $context->find('collapsed');
                $buffer .= $this->section3d743337d1ee557b470226701b73da47($context, $indent, $value);
                // 'expanded' section
                $value = $context->find('expanded');
                $buffer .= $this->section03a2cb78adf693fb240638cbbc7ea15e($context, $indent, $value);
                $buffer .= '" aria-controls="sectionwrapper-';
                $value = $this->resolveValue($context->find('index'), $context);
                $buffer .= $value;
                $buffer .= '">';
                $value = $this->resolveValue($context->find('title'), $context);
                $buffer .= $value;
                $buffer .= '
';
                // 'progressinfo' section
                $value = $context->find('progressinfo');
                $buffer .= $this->sectionBe4fe0ef0d6783bd68a9433e9e65e889($context, $indent, $value);
                $buffer .= $indent . '            </a>
';
            }
            $buffer .= $indent . '      </h4>
';
            $buffer .= $indent . '      ';
            $value = $this->resolveValue($context->find('hiddenmessage'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '      <div class="summary card-text ';
            // 'expanded' section
            $value = $context->find('expanded');
            $buffer .= $this->section2a08c9d6595b23cde72386192648c21d($context, $indent, $value);
            $buffer .= '">';
            $value = $this->resolveValue($context->find('summary'), $context);
            $buffer .= $value;
            $buffer .= '</div>
';
            // 'availability' section
            $value = $context->find('availability');
            $buffer .= $this->sectionAa13c3a45ccbd9cd01d6a6fc52fdbb73($context, $indent, $value);
            $buffer .= $indent . '      <div class="section-summary-activities mdl-right ';
            // 'expanded' section
            $value = $context->find('expanded');
            $buffer .= $this->section2a08c9d6595b23cde72386192648c21d($context, $indent, $value);
            $buffer .= '">';
            $value = $this->resolveValue($context->find('activityinfostring'), $context);
            $buffer .= $value;
            $buffer .= '</div>
';
            $buffer .= $indent . '   </div>
';
            $buffer .= $indent . '</li>
';
        }

        return $buffer;
    }

    private function section89f0bb3f736a8d6caa4453cb5925cb06(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
         <a href="{{{removeurl}}}" class="{{removeurlclass}}">{{{removeicon}}} {{{strremovesection}}}</a>
         ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '         <a href="';
                $value = $this->resolveValue($context->find('removeurl'), $context);
                $buffer .= $value;
                $buffer .= '" class="';
                $value = $this->resolveValue($context->find('removeurlclass'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '">';
                $value = $this->resolveValue($context->find('removeicon'), $context);
                $buffer .= $value;
                $buffer .= ' ';
                $value = $this->resolveValue($context->find('strremovesection'), $context);
                $buffer .= $value;
                $buffer .= '</a>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section54f7ad52a9326313f3d684189285d54e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
         <a href="{{{addurl}}}" class="{{addurlclass}}">{{{addicon}}} {{{straddsection}}}</a>

         {{#strremovesection}}
         <a href="{{{removeurl}}}" class="{{removeurlclass}}">{{{removeicon}}} {{{strremovesection}}}</a>
         {{/strremovesection}}
      ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '         <a href="';
                $value = $this->resolveValue($context->find('addurl'), $context);
                $buffer .= $value;
                $buffer .= '" class="';
                $value = $this->resolveValue($context->find('addurlclass'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '">';
                $value = $this->resolveValue($context->find('addicon'), $context);
                $buffer .= $value;
                $buffer .= ' ';
                $value = $this->resolveValue($context->find('straddsection'), $context);
                $buffer .= $value;
                $buffer .= '</a>
';
                $buffer .= $indent . '
';
                // 'strremovesection' section
                $value = $context->find('strremovesection');
                $buffer .= $this->section89f0bb3f736a8d6caa4453cb5925cb06($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section1f7306bfc6b6eec57c08fe897a40c791(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
<li id="{{divid}}" class="card clearfix mb-4 m-b-2" role="region" style="">
   <div class="content card-block px-15 px-3 py-10 py-2 remui-list-content-border d-flex align-items-center">
      {{#numsections}}
         <a href="{{{addurl}}}" class="{{addurlclass}}">{{{addicon}}} {{{straddsection}}}</a>

         {{#strremovesection}}
         <a href="{{{removeurl}}}" class="{{removeurlclass}}">{{{removeicon}}} {{{strremovesection}}}</a>
         {{/strremovesection}}
      {{/numsections}}

      {{^numsections}}
         <a href="{{{url}}}" data-add-sections="{{{straddsections}}}">{{{icon}}} {{{straddsections}}}</a>
      {{/numsections}}
   </div>
</li>
';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '<li id="';
                $value = $this->resolveValue($context->find('divid'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '" class="card clearfix mb-4 m-b-2" role="region" style="">
';
                $buffer .= $indent . '   <div class="content card-block px-15 px-3 py-10 py-2 remui-list-content-border d-flex align-items-center">
';
                // 'numsections' section
                $value = $context->find('numsections');
                $buffer .= $this->section54f7ad52a9326313f3d684189285d54e($context, $indent, $value);
                $buffer .= $indent . '
';
                // 'numsections' inverted section
                $value = $context->find('numsections');
                if (empty($value)) {
                    
                    $buffer .= $indent . '         <a href="';
                    $value = $this->resolveValue($context->find('url'), $context);
                    $buffer .= $value;
                    $buffer .= '" data-add-sections="';
                    $value = $this->resolveValue($context->find('straddsections'), $context);
                    $buffer .= $value;
                    $buffer .= '">';
                    $value = $this->resolveValue($context->find('icon'), $context);
                    $buffer .= $value;
                    $buffer .= ' ';
                    $value = $this->resolveValue($context->find('straddsections'), $context);
                    $buffer .= $value;
                    $buffer .= '</a>
';
                }
                $buffer .= $indent . '   </div>
';
                $buffer .= $indent . '</li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionF2366841dafb64da058bf610489c4292(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '<div class="highlight bg-primary"></div>';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= '<div class="highlight bg-primary"></div>';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section81332f3df9a6712744ac384d0fa16689(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            {{{ title }}}
         ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '            ';
                $value = $this->resolveValue($context->find('title'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section3d743337d1ee557b470226701b73da47(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'false';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'false';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section03a2cb78adf693fb240638cbbc7ea15e(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'true';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'true';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section9b2f1557a2202587893d18e669fcf402(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
                  <!-- Default checked -->
                  <div class="float-right">
                     <i class="fa fas fa-check-square text-success"></i>
                     <!-- {{{ progress }}} -->
                  </div>
               ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '                  <!-- Default checked -->
';
                $buffer .= $indent . '                  <div class="float-right">
';
                $buffer .= $indent . '                     <i class="fa fas fa-check-square text-success"></i>
';
                $buffer .= $indent . '                     <!-- ';
                $value = $this->resolveValue($context->find('progress'), $context);
                $buffer .= $value;
                $buffer .= ' -->
';
                $buffer .= $indent . '                  </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionBe4fe0ef0d6783bd68a9433e9e65e889(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
               {{#completed}}
                  <!-- Default checked -->
                  <div class="float-right">
                     <i class="fa fas fa-check-square text-success"></i>
                     <!-- {{{ progress }}} -->
                  </div>
               {{/completed}}
            ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                // 'completed' section
                $value = $context->find('completed');
                $buffer .= $this->section9b2f1557a2202587893d18e669fcf402($context, $indent, $value);
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section2a08c9d6595b23cde72386192648c21d(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'hide';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'hide';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionAa13c3a45ccbd9cd01d6a6fc52fdbb73(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
      <div class="section_availability badge badge-pill badge-info mb-10">
        {{{availability}}}
      </div>
      ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '      <div class="section_availability badge badge-pill badge-info mb-10">
';
                $buffer .= $indent . '        ';
                $value = $this->resolveValue($context->find('availability'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '      </div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
