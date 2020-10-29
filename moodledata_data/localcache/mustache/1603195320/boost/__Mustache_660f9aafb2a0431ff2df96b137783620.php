<?php

class __Mustache_660f9aafb2a0431ff2df96b137783620 extends Mustache_Template
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
        // 'editing' section
        $value = $context->find('editing');
        $buffer .= $this->sectionDc291205f7878665e00b75c97423982a($context, $indent, $value);
        // 'editing' inverted section
        $value = $context->find('editing');
        if (empty($value)) {
            
            $buffer .= $indent . '<div id="list-container" class="remui-format-list one-section-format all-section theme-';
            $value = $this->resolveValue($context->find('theme'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= ' mt-20">
';
            $buffer .= $indent . '    <ul class="sections row">
';
            // 'generalsection' section
            $value = $context->find('generalsection');
            $buffer .= $this->section16c5b4b2c583985634daeb4957c284ca($context, $indent, $value);
            // 'sections' section
            $value = $context->find('sections');
            $buffer .= $this->sectionD818bee5120044427eeede494593e4b7($context, $indent, $value);
            $buffer .= $indent . '    </ul>
';
            $buffer .= $indent . '</div>
';
        }

        return $buffer;
    }

    private function section4f953ab3af5f7fcbb8e1584d16aa508f(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            {{> format_remuiformat/list_general_section_edit }}
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
                
                if ($partial = $this->mustache->loadPartial('format_remuiformat/list_general_section_edit')) {
                    $buffer .= $partial->renderInternal($context, $indent . '            ');
                }
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionD818bee5120044427eeede494593e4b7(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            {{> format_remuiformat/list_sections_summary }}
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
                
                if ($partial = $this->mustache->loadPartial('format_remuiformat/list_sections_summary')) {
                    $buffer .= $partial->renderInternal($context, $indent . '            ');
                }
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionDc291205f7878665e00b75c97423982a(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
<div id="list-editing-container" class="remui-format-list one-section-format all-section theme-{{theme}} mt-20">
    <ul class="sections row">
        {{! Display General Section }}
        {{#generalsection}}
            {{> format_remuiformat/list_general_section_edit }}
        {{/generalsection}}
        {{! Display Remaining Section }}
        {{#sections}}
            {{> format_remuiformat/list_sections_summary }}
        {{/sections}}
        {{{ addsection }}}
    </ul>
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
                
                $buffer .= $indent . '<div id="list-editing-container" class="remui-format-list one-section-format all-section theme-';
                $value = $this->resolveValue($context->find('theme'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= ' mt-20">
';
                $buffer .= $indent . '    <ul class="sections row">
';
                // 'generalsection' section
                $value = $context->find('generalsection');
                $buffer .= $this->section4f953ab3af5f7fcbb8e1584d16aa508f($context, $indent, $value);
                // 'sections' section
                $value = $context->find('sections');
                $buffer .= $this->sectionD818bee5120044427eeede494593e4b7($context, $indent, $value);
                $buffer .= $indent . '        ';
                $value = $this->resolveValue($context->find('addsection'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $buffer .= $indent . '    </ul>
';
                $buffer .= $indent . '</div>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section16c5b4b2c583985634daeb4957c284ca(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            {{> format_remuiformat/list_general_section }}
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
                
                if ($partial = $this->mustache->loadPartial('format_remuiformat/list_general_section')) {
                    $buffer .= $partial->renderInternal($context, $indent . '            ');
                }
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
